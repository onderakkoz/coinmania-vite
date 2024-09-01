import { useFormik } from 'formik'
import { useNavigate } from 'react-router-dom';
import { v4 } from 'uuid';
import { schema } from '../schema';



const LoginPage = () => {

    const navigate = useNavigate()


    const formik = useFormik({
        initialValues:{
            email: "",
            age :"",
            password: "",
            confirm_password:"",
        },

        onSubmit: async (values,actions)=>{
            // console.log(values);
            // console.log(actions);


            //Api simulasyonu  olusturuldu 
            await new Promise((resolve) => setTimeout(resolve, 2000))
            console.log("calistirdi");

            // kullaniciyi localstorage'a gonderme
            localStorage.setItem("user" ,JSON.stringify({...values, id:v4()}))

            //yonlendir
            navigate("/home");
        },

        validationSchema:schema,
    })


  return (
    <div>
     <div className="container">
        <div className="logo">
            <img src="/public/c-logo.png"  alt="" />
            <h2>Coinmania</h2>
        </div>
        {/**form Alani */}
        <form  onSubmit={formik.handleSubmit}>
        {
            inputs.map((data, key)=> (
                <InputField formik={formik} key={key} data={data}/>
            ))
        }
            <button disabled={formik.isSubmitting} type='submit'>Kaydol</button>
        </form>
     </div>
    </div>
  )
}

export default LoginPage


const inputs = [
    {
        label : "Email",
        name : "email",
        type : "email",
        
    },
    {
        label : "Yaş",
        name : "age",
        type : "number",
        
    },
    {
        label : "Şifre",
        name : "password",
        type : "password",
    },
    {
        label : "Şifre Onay",
        name : "confirm_password",
        type : "password",
        
    },
]

const InputField =({data,formik}) =>{
    // console.log(formik);
    const {label,type,name} = data

    return(
        <div>
            <label >{label}</label>
            <input type={type} name={name} onChange={formik.handleChange} />

            {
                formik.touched[name] && formik.errors[name] && (
                    <span>{formik.errors[name]}</span>
                )
            }
        </div>
    )
}
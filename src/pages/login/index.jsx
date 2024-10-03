import './index.scss'
import img2 from '../../assets/images/img2.png'
import { Link } from 'react-router-dom'
import email from '../../assets/images/email.webp'

export default function LoginPage(){
    return(
        <div className='div2'>

            <div className='login'>
                <div className='informaçoes'>
                    <h1>Login</h1>
                    <div className='inp'>
                        <div className='in1'>
                            <img  src={email} alt="" />
                            <input  type="text" placeholder='E-mail' />
                        </div>
                        <div className='in2'>
                            <img src={img2} alt="" />
                            <input  type="text" placeholder='senha'/>
                        </div>
                    </div>    
                        <Link className='senha' to='/redefinicaoSenha'>esqueceu sua senha?</Link>   
                    <div className='botao'> 
                        <Link to='/cadastro' className='b1'>cadastrar-se</Link>
                        <Link to='/inicio' className='b2'>entrar</Link>
                    </div>
                </div>
                <div className='bem-vinda'>
                    <h1 className='h1'>Bem-Vinda!</h1>
                    <h1 className='h2'>Pronta para realçar sua beleza?</h1>
                </div>
            </div>
        </div>
    )
}

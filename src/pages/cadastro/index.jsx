import './index.scss'
import img2 from '../../assets/images/img2.png'
import perfil from '../../assets/images/perfil.png'
import telefone from '../../assets/images/telefone.png'
import email from '../../assets/images/email.webp'

export default function RegisterPage(){
    return(
        <div className='div3'>

            <div className='login'>
                <div className='informaçoes'>
                    <h1> Cadastre-se</h1>
                    <div className='inp'>
                        <div className='in1'>
                            <img src={perfil} alt="" />
                            <input type="text" placeholder='Nome' />
                        </div>
                        <div className='in2'>
                            <img src={telefone} alt="" />
                            <input type="text" placeholder='Telefone' />
                        </div>
                        <div className='in3'>
                            <img  src={email} alt="" />
                            <input  type="text" placeholder='E-mail' />
                        </div>
                        <div className='in4'>
                            <img src={img2} alt="" />
                            <input  type="text" placeholder='senha'/>
                        </div>
                        <div className='in4'>
                            <img src={img2} alt="" />
                            <input  type="text" placeholder='senha'/>
                        </div>
                    </div>    
                    <div className='botao'> 
                        <button className='b1'>cadastrar</button>
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

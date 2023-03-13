import { Logo } from 'components/logo/Logo';
import { ButtonPrimary } from 'components/ButtonPrimary/ButtonPrimary';
import s from './style.module.css';
import logoSrc from "assets/images/logo.png"
import { useNavigate } from 'react-router-dom';
export function Header(props) {
    const navigate = useNavigate()
    return(
        <div className={ `row ${s.container}` }>
            <div className='col-xs-12 col-sm-4'>
                <Logo onClick={() => navigate("/")} title='CaitNote' subtitle="Take note!" image={logoSrc} />
            </div>
            <div className='col-xs-12 col-sm-8 text-end'>
                <ButtonPrimary onClick={() => navigate("/note/new")}>
                    Add Note +
                </ButtonPrimary>
            </div>
        </div>
    );
}
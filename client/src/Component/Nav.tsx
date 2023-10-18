import { Link } from 'react-router-dom';


export default function Navbar() {

    return (<>
    
        <nav>
            <ul>
                <li>
                    <Link to = '/blog_editor'>블로그 올리기</Link>
                    {/* <Link to = '/signin'></Link> */}
                </li>
            </ul>
        </nav>

    </>)

}
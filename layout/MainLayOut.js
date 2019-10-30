import ProductsPage from "../pages/products";
import Link from 'next/link';
const MainLayOut = (props) =>{
  return(
    <div className = 'container'>
    <div className ='topbar'>
        <div className = 'logo-container'>
        <Link href = '/'>
        <a className = 'link'> Stock </a>
        </Link>
        </div>
        <div className = 'menu-comtainer'>
            <div>
                <Link href = '/products'>
                    <a> Product </a>
                 </Link>
            </div>
            <div> <Link href = '/manages'>
                    <a> Manage </a>
                 </Link>
            </div>
            <div> <Link href = '/profiles'>
                    <a> Profile </a>
                 </Link>
            </div>
        </div>
    </div>
    <div>
        {props.children}
        </div>
    
    <style jsx global>
    {`
    body{
        margin: 0;
        font-family:'LiuJianMaoCao';
    }
    @font-face{
        font-family: LiuJianMaoCao;
        src: url(/static/font/LiuJianMaoCao-Regular.ttf);
        font-weight: 40px;
    `}
    </style>
    <style jsx >{`
    .topbar{
        display: flex;
        justify-content:space-between;
        align-items:center;
        height: 32px;
        padding: 0px 40px;
        text-decoration: none;
        box-shadow: 10px 10px 
    }
    .menu-comtainer{
        display: flex;

    }
    .menu-comtainer div {
        margin-left: 50px;
    }
    .link{
        text-decoration: none;
        color:black;
    }
    `}</style>
    </div>
  )
}

export default MainLayOut;
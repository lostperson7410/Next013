import Link from 'next/link';




const HomePage = () => {
    return(
    //jsx
        <div className = 'container'>
            <div className ='topbar'>
                <div className = 'logo-container'>
                logo
                </div>
                <div className = 'Menu-comtainer'>
                Menu
                </div>
            </div>
            <style jsx global>
            {`
            body{
                margin: 0;
            }
            `}
            </style>
            <style jsx >{`
            .topbar{
                display: flex;
                justify-content:space-between;
                height: 32px;
                background-color:red
            }
            `}</style>
        </div>

    )
} 

export default HomePage;
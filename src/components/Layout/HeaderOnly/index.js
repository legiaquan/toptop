import Header from '~/components/Layout/DefaultLayout/components/Header'

function HeaderOnly({children}) {
    return ( 
        <div>
            <Header />
            <div className="container">
                <div className="content">{ children }</div>
            </div>
        </div>
     );
}

export default HeaderOnly;
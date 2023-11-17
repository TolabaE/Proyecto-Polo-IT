import "./CompaniesContainer.css"
import Company from "../components/Company";

const CompaniesContanier = ({ loading, data, totalPages, page, setPage }) => {
    const Loader = () => {
        return (
        <div className="container-loader">
            <div className="cube-loader"><div className="cube__inner-loader"></div></div>
            <div className="cube-loader"><div className="cube__inner-loader"></div></div>
            <div className="cube-loader"><div className="cube__inner-loader"></div></div>
        </div>
    )}

    return (
        <>
            {
                loading ? <Loader /> : 
                
                data.length === 0 ? <p>No hay empresas disponibles de acuerdo a los filtros solicitados</p> :
                
                <section>
                    <div className="container-search">
                    {
                        Array(totalPages).fill(0).map((_, index) => (
                            <button key={index} className={(index+1) === page ? "btnActive" : ""} onClick={() => setPage(index+1)}>{index+1}</button>
                        ))
                    }
                    </div>

                    <div className="container-companies">
                        {
                        data.map(data => (
                            <Company key={data._id} {...data} />
                        ))
                        }
                    </div>                        
                </section>
            }
        </>
    )
}

export default CompaniesContanier;

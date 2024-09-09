import Cousing from "../Cousing/Cousing";


const Uncle = ({asset}) => {
    return (
        <div>
            <h2>Uncle</h2>
            <section className="flex">
                <Cousing name={'Rafsan'} asset={asset}></Cousing>
                <Cousing name={'Sumaiya'}></Cousing>
            </section>
        </div>
    );
};

export default Uncle;
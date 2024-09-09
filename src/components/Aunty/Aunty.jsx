import Cousing from "../Cousing/Cousing";


const Aunty = ({asset}) => {
    return (
        <div>
            <h2>Aunty</h2>
            <section className="flex">
                <Cousing name={'Anik'}></Cousing>
                <Cousing name={'Sohel'} asset={asset}></Cousing>
            </section>
        </div>
    );
};

export default Aunty;
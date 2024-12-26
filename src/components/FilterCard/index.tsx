import './styles.css';
import Button from "../Button";

export default function FilterCard() {

    return (
        <div className="dsf-filter-card dsf-container dsf-mt20">
            <form className="dsf-form">
                <div className="dsf-ml20 dsf-mt20">
                    <input
                        type="text"
                        placeholder="Preço mínimo"
                    />
                </div>
                <div className="dsf-ml20 dsf-mt20">
                    <input
                        type="text"
                        placeholder="Preço máximo"
                    />
                </div>
                <Button text="Filtrar" />
            </form>
        </div>
    );
}
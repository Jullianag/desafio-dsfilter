import './styles.css';

type Props = {
    text: string;
}

export default function Button({text}: Props) {

    return (
        <div className="dsf-button dsf-ml20 dsf-mt20">
            {text}
        </div>
    );
}
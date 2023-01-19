import { InputDataForm } from "../../../components/inputForm"

export const V1InputPage: React.FC = () => {
    return (
        <div className="container">
            <p>V1 Input Page</p>
            <InputDataForm version="V1" />
        </div>
    )
}
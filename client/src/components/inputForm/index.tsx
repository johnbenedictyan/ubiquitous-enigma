import { FloatingLabel, Form, Table } from "react-bootstrap";
import React, { useEffect } from "react";
// import { readFileSync } from "fs";
import { GENDERS } from "../../enum/gender";
import { IPerson } from '../../interface/IPerson';

interface IInputDataForm {
    version: 'V1' | 'V2'
}

export const InputDataForm: React.FC<IInputDataForm> = props => {
    const [name, setName] = React.useState<string>('');
    const [age, setAge] = React.useState<number>(1);
    const [gender, setGender] = React.useState<GENDERS>(GENDERS.M);
    const [personData, setPersonData] = React.useState<IPerson[]>([]);

    const handleNameChange: React.ChangeEventHandler<HTMLInputElement> = (e) => {
        setName(e.target.value);
    }

    const handleAgeChange: React.ChangeEventHandler<HTMLInputElement> = (e) => {
        setAge(e.target.value != '' ? parseInt(e.target.value) : 1);
    }

    const handleGenderChange: React.ChangeEventHandler<HTMLSelectElement> = (e) => {
        setGender(e.target.value == "M" ? GENDERS.M : GENDERS.F);
    }

    const handleSubmit = (e: React.SyntheticEvent) => {
        e.preventDefault();
        if (props.version == "V1") {
            // JSON DB
            // let data = JSON.parse(readFileSync('../../mocks/personMock.json', 'utf-8'));
            // console.log(data)
            if (personData && personData.slice(-1).length == 1) {
                let latestId: number = personData.slice(-1)[0].id ? personData.slice(-1)[0].id : 0;
                let newPersonData: IPerson[] = personData;

                newPersonData.push({
                    id: latestId + 1,
                    name,
                    age,
                    gender
                });
                setPersonData(newPersonData);
                saveStateToLocalStorage();
                window.location.reload();
            }
        } else {
            // BACKEND
        }
    }

    const getMockData = () => {
        console.log(process.env.PUBLIC_URL + 'data.json')
        fetch(process.env.PUBLIC_URL + 'data.json'
            , {
                headers: {
                    'Content-Type': 'application/json',
                    'Accept': 'application/json'
                }
            }
        )
            .then(function (response) {
                console.log(response)
                return response.json();
            })
            .then(function (myJson) {
                console.log(myJson);
                setPersonData(myJson)
            });
    }

    const saveStateToLocalStorage = () => {
        localStorage.setItem('state', JSON.stringify(personData));
    }

    // Fetch data from local storage
    const getStateFromLocalStorage = () => {
        let data = localStorage.getItem('state');
        if (data !== null && data != '[]') {
            setPersonData(JSON.parse(data));
        } else {
            getMockData();
            saveStateToLocalStorage();
        }
    }

    useEffect(() => {
        getStateFromLocalStorage();
    }, [])

    return (
        <form onSubmit={handleSubmit}>
            <div className="row">
                <div className="col-4">
                    <FloatingLabel
                        controlId="floatingInputName"
                        label="Name"
                        className="mb-3"
                    >
                        <Form.Control type="text" placeholder="Randy" value={name} onChange={handleNameChange} />
                    </FloatingLabel>
                </div>
                <div className="col-4">
                    <FloatingLabel
                        controlId="floatingInputAge"
                        label="Age"
                        className="mb-3"
                    >
                        <Form.Control type="number" placeholder="21" value={age} onChange={handleAgeChange} />
                    </FloatingLabel>
                </div>
                <div className="col-4">
                    <FloatingLabel controlId="floatingSelect" label="Gender">
                        <Form.Select aria-label="Gender" value={gender} onChange={handleGenderChange}>
                            <option value="M">Male</option>
                            <option value="F">Female</option>
                        </Form.Select>
                    </FloatingLabel>
                </div>
                <div className="col">
                    <button type="submit" className="btn btn-primary">Submit</button>
                </div>
            </div>
            <div className="row mt-5">
                <div className="col">
                    <Table striped bordered hover>
                        <thead>
                            <tr>
                                <th>#</th>
                                <th>Name</th>
                                <th>Age</th>
                                <th>Gender</th>
                            </tr>
                        </thead>
                        <tbody>
                            {
                                personData.map(x => (
                                    <tr key={`table_row_${x.id}`}>
                                        <td>{x.id}</td>
                                        <td>{x.name}</td>
                                        <td>{x.age}</td>
                                        <td>{x.gender}</td>
                                    </tr>
                                ))
                            }
                        </tbody>
                    </Table>
                </div>
            </div>
        </form>
    )
}
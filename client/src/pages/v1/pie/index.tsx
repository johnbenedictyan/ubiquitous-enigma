import React, { useCallback, useEffect } from "react";
import { CustomPieChart } from "../../../components/charts/pie"
import { IChartData } from "../../../interface/IChartData";
import { IPerson } from "../../../interface/IPerson";
import { GENDERS } from "../../../enum/gender";

export const V1PieChartPage: React.FC = () => {
    const [chartData, setChartData] = React.useState<IChartData[]>([]);
    const [personData, setPersonData] = React.useState<IPerson[]>([]);

    const getMockData = () => {
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

    const saveStateToLocalStorage = useCallback(() => {
        localStorage.setItem('state', JSON.stringify(personData));
    }, [personData]);

    // Fetch data from local storage
    const getStateFromLocalStorage = useCallback(() => {
        let data = localStorage.getItem('state');
        if (data !== null && data !== '[]') {
            setPersonData(JSON.parse(data));
        } else {
            getMockData();
            saveStateToLocalStorage();
        }
    }, [saveStateToLocalStorage]);

    useEffect(() => {
        getStateFromLocalStorage();
    }, [getStateFromLocalStorage])

    useEffect(() => {
        if (personData) {
            let newChartData: IChartData[] = [];
            newChartData.push({ name: "Male", value: personData.filter(x => x.gender === GENDERS.M).length });
            newChartData.push({ name: "Female", value: personData.filter(x => x.gender === GENDERS.F).length });
            setChartData(newChartData);
        }
    }, [personData]);

    return (
        <div>
            <p>V1 Pie Chart Page</p>
            <CustomPieChart data={chartData} />
        </div>
    )
}
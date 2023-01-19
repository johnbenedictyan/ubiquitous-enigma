import React, { useCallback, useEffect } from 'react';

import { CustomBarChart } from '../../../components/charts/bar';
import { IChartData } from '../../../interface/IChartData';
import { IPerson } from '../../../interface/IPerson';

export const V1BarChartPage: React.FC = () => {
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
            newChartData.push({ name: "Young Adult", value: personData.filter(x => x.age > 0 && x.age <= 35).length });
            newChartData.push({ name: "Adult", value: personData.filter(x => x.age >= 36 && x.age <= 50).length });
            newChartData.push({ name: "Seniors", value: personData.filter(x => x.age >= 51).length });
            setChartData(newChartData);
        }
    }, [personData]);


    return (
        <div>
            <p>V1 Bar Chart Page</p>
            <CustomBarChart data={chartData} />
        </div>
    )
}
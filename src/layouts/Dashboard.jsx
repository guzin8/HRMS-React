import React from 'react'
import AdvertisementList from '../pages/AdvertisementList'
import { Grid, GridColumn, GridRow } from 'semantic-ui-react'
import EmployerList from '../pages/EmployerList'
import JobSeekerList from '../pages/JobSeekerList'

export default function Dashboard() {
    return (
        <div>
             <Grid>
                <Grid.Row>
                    <Grid.Column width = {4}>
                    
                    </Grid.Column>
                    <Grid.Column width = {12}>
                    <AdvertisementList></AdvertisementList>
                    <EmployerList></EmployerList>
                    <JobSeekerList></JobSeekerList>
                    </Grid.Column>
                </Grid.Row>
            </Grid>   
        </div>
    )
}

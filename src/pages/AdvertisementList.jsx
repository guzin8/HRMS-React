import React, { useState, useEffect } from 'react'
import { Icon, Label, Menu, Table } from "semantic-ui-react";
import AdvertesimentService from '../services/advertisementService';


export default function AdvertisementList() {

  const [advertisements, setadvertisements] = useState([]);

  useEffect(() => {
    let advertisementService = new AdvertesimentService()
    advertisementService.getAdvertisements().then(result => setadvertisements(result.data.data))
  })
    return (
        <div>
      <Table celled>
        <Table.Header>
          <Table.Row>
            <Table.HeaderCell>İş tanımı</Table.HeaderCell>
            <Table.HeaderCell>Minimum Maaş Ücreti</Table.HeaderCell>
            <Table.HeaderCell>Maksimum Maaş Ücreti</Table.HeaderCell>
            <Table.HeaderCell>Alınacak kişi sayısı</Table.HeaderCell>
            <Table.HeaderCell>Son başvuru tarihi</Table.HeaderCell>
            <Table.HeaderCell>İlan tarihi</Table.HeaderCell>
            <Table.HeaderCell>Şirket ismi</Table.HeaderCell>
            <Table.HeaderCell>Şehir</Table.HeaderCell>
            <Table.HeaderCell>İş pozisyonu</Table.HeaderCell>
          </Table.Row>
        </Table.Header>

        <Table.Body>
          {advertisements.map((advertisement) => (
            <Table.Row key = {advertisement.id}>
              <Table.Cell>{advertisement.jobDefinition}</Table.Cell>
              <Table.Cell>{advertisement.minSalary}</Table.Cell>
              <Table.Cell>{advertisement.maxSalary}</Table.Cell>
              <Table.Cell>{advertisement.numberOfHires}</Table.Cell>
              <Table.Cell>{advertisement.deadline}</Table.Cell>
              <Table.Cell>{advertisement.createdDate}</Table.Cell>
              <Table.Cell>{advertisement.employer.companyName}</Table.Cell>
              <Table.Cell>{advertisement.city.name}</Table.Cell>
              <Table.Cell>{advertisement.jobPosition.name}</Table.Cell>
            </Table.Row>
          ))}
        </Table.Body>

        <Table.Footer>
          <Table.Row>
            <Table.HeaderCell colSpan="3">
              <Menu floated="right" pagination>
                <Menu.Item as="a" icon>
                  <Icon name="chevron left" />
                </Menu.Item>
                <Menu.Item as="a">1</Menu.Item>
                <Menu.Item as="a">2</Menu.Item>
                <Menu.Item as="a">3</Menu.Item>
                <Menu.Item as="a">4</Menu.Item>
                <Menu.Item as="a" icon>
                  <Icon name="chevron right" />
                </Menu.Item>
              </Menu>
            </Table.HeaderCell>
          </Table.Row>
        </Table.Footer>
      </Table>
    </div>
    )
}

import React, { useState, useEffect } from 'react';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { Button, Table } from 'reactstrap';
import { Translate } from 'react-jhipster';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

import { APP_DATE_FORMAT, APP_LOCAL_DATE_FORMAT } from 'app/config/constants';
import { useAppDispatch, useAppSelector } from 'app/config/store';

import { ILocation } from 'app/shared/model/location.model';
import { getEntities } from './location.reducer';

export const Location = () => {
  const dispatch = useAppDispatch();

  const location = useLocation();
  const navigate = useNavigate();

  const locationList = useAppSelector(state => state.location.entities);
  const loading = useAppSelector(state => state.location.loading);

  useEffect(() => {
    dispatch(getEntities({}));
  }, []);

  const handleSyncList = () => {
    dispatch(getEntities({}));
  };

  return (
    <div>
      <h2 id="location-heading" data-cy="LocationHeading">
        <Translate contentKey="adpaievfApp.location.home.title">Locations</Translate>
        <div className="d-flex justify-content-end">
          <Button className="me-2" color="info" onClick={handleSyncList} disabled={loading}>
            <FontAwesomeIcon icon="sync" spin={loading} />{' '}
            <Translate contentKey="adpaievfApp.location.home.refreshListLabel">Refresh List</Translate>
          </Button>
          <Link to="/location/new" className="btn btn-primary jh-create-entity" id="jh-create-entity" data-cy="entityCreateButton">
            <FontAwesomeIcon icon="plus" />
            &nbsp;
            <Translate contentKey="adpaievfApp.location.home.createLabel">Create new Location</Translate>
          </Link>
        </div>
      </h2>
      <div className="table-responsive">
        {locationList && locationList.length > 0 ? (
          <Table responsive>
            <thead>
              <tr>
                <th>
                  <Translate contentKey="adpaievfApp.location.id">ID</Translate>
                </th>
                <th>
                  <Translate contentKey="adpaievfApp.location.numeroRue">Numero Rue</Translate>
                </th>
                <th>
                  <Translate contentKey="adpaievfApp.location.nomVoie">Nom Voie</Translate>
                </th>
                <th>
                  <Translate contentKey="adpaievfApp.location.streetName">Street Name</Translate>
                </th>
                <th>
                  <Translate contentKey="adpaievfApp.location.postalCode">Postal Code</Translate>
                </th>
                <th>
                  <Translate contentKey="adpaievfApp.location.city">City</Translate>
                </th>
                <th>
                  <Translate contentKey="adpaievfApp.location.nomDepartement">Nom Departement</Translate>
                </th>
                <th>
                  <Translate contentKey="adpaievfApp.location.nomRegion">Nom Region</Translate>
                </th>
                <th>
                  <Translate contentKey="adpaievfApp.location.employee">Employee</Translate>
                </th>
                <th>
                  <Translate contentKey="adpaievfApp.location.employeur">Employeur</Translate>
                </th>
                <th />
              </tr>
            </thead>
            <tbody>
              {locationList.map((location, i) => (
                <tr key={`entity-${i}`} data-cy="entityTable">
                  <td>
                    <Button tag={Link} to={`/location/${location.id}`} color="link" size="sm">
                      {location.id}
                    </Button>
                  </td>
                  <td>{location.numeroRue}</td>
                  <td>{location.nomVoie}</td>
                  <td>{location.streetName}</td>
                  <td>{location.postalCode}</td>
                  <td>{location.city}</td>
                  <td>{location.nomDepartement}</td>
                  <td>{location.nomRegion}</td>
                  <td>
                    {location.employees
                      ? location.employees.map((val, j) => (
                          <span key={j}>
                            <Link to={`/employee/${val.id}`}>{val.id}</Link>
                            {j === location.employees.length - 1 ? '' : ', '}
                          </span>
                        ))
                      : null}
                  </td>
                  <td>
                    {location.employeurs
                      ? location.employeurs.map((val, j) => (
                          <span key={j}>
                            <Link to={`/employeur/${val.id}`}>{val.id}</Link>
                            {j === location.employeurs.length - 1 ? '' : ', '}
                          </span>
                        ))
                      : null}
                  </td>
                  <td className="text-end">
                    <div className="btn-group flex-btn-group-container">
                      <Button tag={Link} to={`/location/${location.id}`} color="info" size="sm" data-cy="entityDetailsButton">
                        <FontAwesomeIcon icon="eye" />{' '}
                        <span className="d-none d-md-inline">
                          <Translate contentKey="entity.action.view">View</Translate>
                        </span>
                      </Button>
                      <Button tag={Link} to={`/location/${location.id}/edit`} color="primary" size="sm" data-cy="entityEditButton">
                        <FontAwesomeIcon icon="pencil-alt" />{' '}
                        <span className="d-none d-md-inline">
                          <Translate contentKey="entity.action.edit">Edit</Translate>
                        </span>
                      </Button>
                      <Button tag={Link} to={`/location/${location.id}/delete`} color="danger" size="sm" data-cy="entityDeleteButton">
                        <FontAwesomeIcon icon="trash" />{' '}
                        <span className="d-none d-md-inline">
                          <Translate contentKey="entity.action.delete">Delete</Translate>
                        </span>
                      </Button>
                    </div>
                  </td>
                </tr>
              ))}
            </tbody>
          </Table>
        ) : (
          !loading && (
            <div className="alert alert-warning">
              <Translate contentKey="adpaievfApp.location.home.notFound">No Locations found</Translate>
            </div>
          )
        )}
      </div>
    </div>
  );
};

export default Location;
import React, { useEffect } from 'react';
import { Link, useParams } from 'react-router-dom';
import { Button, UncontrolledTooltip, Row, Col } from 'reactstrap';
import { Translate } from 'react-jhipster';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

import { APP_DATE_FORMAT, APP_LOCAL_DATE_FORMAT } from 'app/config/constants';
import { useAppDispatch, useAppSelector } from 'app/config/store';

import { getEntity } from './employee.reducer';

export const EmployeeDetail = () => {
  const dispatch = useAppDispatch();

  const { id } = useParams<'id'>();

  useEffect(() => {
    dispatch(getEntity(id));
  }, []);

  const employeeEntity = useAppSelector(state => state.employee.entity);
  return (
    <Row>
      <Col md="8">
        <h2 data-cy="employeeDetailsHeading">
          <Translate contentKey="adpaievfApp.employee.detail.title">Employee</Translate>
        </h2>
        <dl className="jh-entity-details">
          <dt>
            <span id="id">
              <Translate contentKey="global.field.id">ID</Translate>
            </span>
          </dt>
          <dd>{employeeEntity.id}</dd>
          <dt>
            <span id="firstName">
              <Translate contentKey="adpaievfApp.employee.firstName">First Name</Translate>
            </span>
            <UncontrolledTooltip target="firstName">
              <Translate contentKey="adpaievfApp.employee.help.firstName" />
            </UncontrolledTooltip>
          </dt>
          <dd>{employeeEntity.firstName}</dd>
          <dt>
            <span id="lastName">
              <Translate contentKey="adpaievfApp.employee.lastName">Last Name</Translate>
            </span>
          </dt>
          <dd>{employeeEntity.lastName}</dd>
          <dt>
            <span id="numeroSecuriteSociale">
              <Translate contentKey="adpaievfApp.employee.numeroSecuriteSociale">Numero Securite Sociale</Translate>
            </span>
          </dt>
          <dd>{employeeEntity.numeroSecuriteSociale}</dd>
          <dt>
            <span id="qualification">
              <Translate contentKey="adpaievfApp.employee.qualification">Qualification</Translate>
            </span>
          </dt>
          <dd>{employeeEntity.qualification}</dd>
          <dt>
            <span id="tauxImposition">
              <Translate contentKey="adpaievfApp.employee.tauxImposition">Taux Imposition</Translate>
            </span>
          </dt>
          <dd>{employeeEntity.tauxImposition}</dd>
          <dt>
            <Translate contentKey="adpaievfApp.employee.employee">Employee</Translate>
          </dt>
          <dd>{employeeEntity.employee ? employeeEntity.employee.id : ''}</dd>
          <dt>
            <Translate contentKey="adpaievfApp.employee.job">Job</Translate>
          </dt>
          <dd>
            {employeeEntity.jobs
              ? employeeEntity.jobs.map((val, i) => (
                  <span key={val.id}>
                    <a>{val.id}</a>
                    {employeeEntity.jobs && i === employeeEntity.jobs.length - 1 ? '' : ', '}
                  </span>
                ))
              : null}
          </dd>
        </dl>
        <Button tag={Link} to="/employee" replace color="info" data-cy="entityDetailsBackButton">
          <FontAwesomeIcon icon="arrow-left" />{' '}
          <span className="d-none d-md-inline">
            <Translate contentKey="entity.action.back">Back</Translate>
          </span>
        </Button>
        &nbsp;
        <Button tag={Link} to={`/employee/${employeeEntity.id}/edit`} replace color="primary">
          <FontAwesomeIcon icon="pencil-alt" />{' '}
          <span className="d-none d-md-inline">
            <Translate contentKey="entity.action.edit">Edit</Translate>
          </span>
        </Button>
      </Col>
    </Row>
  );
};

export default EmployeeDetail;

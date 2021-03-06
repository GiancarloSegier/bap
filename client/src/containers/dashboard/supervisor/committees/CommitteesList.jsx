import React, { Component } from "react";
import { inject, observer } from "mobx-react";
import CommitteesListItem from "../../../../components/dashboard/committees/list/CommitteesListItem";
import CommitteeHeader from "../../../../components/dashboard/committees/overview/CommitteeHeader";
import styles from "./committeesList.module.css";

class CommitteesList extends Component {
  constructor(props) {
    super(props);
    this.state = {
      country: "",
      committees: this.props.committeeStore.committees
    };
  }

  handleChangeCountry = e => {
    const filterCountry = e.target.value;

    if (filterCountry === "") {
      this.setState({ country: "" });
    } else {
      this.setState({ country: filterCountry });
    }
  };
  render() {
    const { countries, committees } = this.props.committeeStore;
    const { country } = this.state;

    return (
      <>
        {countries.length > 0 ? (
          <div className={styles.filter}>
            <p>Sort by:</p>

            <select
              className={styles.countrySelect}
              onChange={this.handleChangeCountry}
            >
              <option value="">All countries</option>
              {countries.map((country, i) => (
                <option key={i} value={country}>
                  {country}
                </option>
              ))}
            </select>
          </div>
        ) : null}

        <CommitteeHeader countries={countries} />
        {committees
          .filter(committee => {
            if (country !== "") {
              return committee.country === country;
            } else {
              return committee;
            }
          })
          .map((committee, i) => {
            return <CommitteesListItem key={i} committee={committee} />;
          })}
      </>
    );
  }
}

export default inject(`committeeStore`)(observer(CommitteesList));

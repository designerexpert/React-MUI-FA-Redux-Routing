import React, { Component } from "react";
import PropTypes from "prop-types";
import classNames from "classnames";
import Typography from "@material-ui/core/Typography";
import { withStyles } from "@material-ui/core/styles";
import TextField from "@material-ui/core/TextField";
import MenuItem from "@material-ui/core/MenuItem";

const styles = theme => ({
    container: {
        display: "flex",
        flexWrap: "wrap",
        background: "#FEFEF1",
        borderRadius: theme.spacing.unit / 2,
        border: "2px solid #F1F1D1",
        maxWidth: "500px"
    },
    textField: {
        marginLeft: theme.spacing.unit,
        marginRight: theme.spacing.unit
    },
    dense: {
        marginTop: 16
    },
    menu: {
        width: 200
    },
    heading: {
        width: "100%",
        padding: theme.spacing.unit,
        background: "#F1F1D1",
        color: "#232312"
    }
});

class MuiForms extends Component {
    state = {
        name: "",
        email: "",
        address1: "",
        address2: "",
        city: "",
        state: "",
        zip: "",
        hobby: ""
    };

    handleChange = name => event => {
        this.setState({
            [name]: event.target.value
        });
    };

    render() {
        const { classes } = this.props;
        const hOptions = [
            { label: "Painting", icon: "" },
            { label: "Gaming", icon: "" },
            { label: "Coding", icon: "" }
        ];
        return (
            <form className={classes.container} autoComplete="on">
                <Typography
                    className={classes.heading}
                    component="h3"
                    variant="h5"
                    gutterBottom
                >
                    Contact Information
                </Typography>
                <TextField
                    id="outlined-name"
                    label="Full Name"
                    className={classes.textField}
                    value={this.state.name}
                    onChange={this.handleChange("name")}
                    margin="normal"
                    variant="outlined"
                />
                <TextField
                    id="outlined-email-input"
                    label="E-Mail"
                    type="email"
                    className={classes.textField}
                    value={this.state.email}
                    onChange={this.handleChange("email")}
                    margin="normal"
                    variant="outlined"
                />
                <TextField
                    id="outlined-address-1"
                    label="Address Line 1"
                    className={classes.textField}
                    value={this.state.address1}
                    onChange={this.handleChange("address1")}
                    margin="normal"
                    variant="outlined"
                />
                <TextField
                    id="outlined-address-1"
                    label="Address Line 2"
                    className={classes.textField}
                    value={this.state.address2}
                    onChange={this.handleChange("address2")}
                    margin="normal"
                    variant="outlined"
                />
                <TextField
                    id="outlined-city-input"
                    label="City"
                    className={classes.textField}
                    value={this.state.city}
                    onChange={this.handleChange("city")}
                    margin="normal"
                    variant="outlined"
                />
                <TextField
                    id="outlined-state-input"
                    label="State"
                    className={classes.textField}
                    value={this.state.state}
                    onChange={this.handleChange("state")}
                    margin="normal"
                    variant="outlined"
                />
                <TextField
                    id="outlined-zip-input"
                    label="Zip-Code"
                    className={classes.textField}
                    value={this.state.zip}
                    onChange={this.handleChange("zip")}
                    margin="normal"
                    variant="outlined"
                />
                <TextField
                    id="outlined-select-hobby"
                    select
                    label="Select Hobby"
                    className={classes.textField}
                    value={this.state.hobby}
                    onChange={this.handleChange("hobby")}
                    SelectProps={{
                        MenuProps: {
                            className: classes.menu
                        }
                    }}
                    helperText="Please select your hobby"
                    margin="normal"
                    variant="outlined"
                >
                    {hOptions.map(option => (
                        <MenuItem key={option.label} value={option.label}>
                            {option.label}
                        </MenuItem>
                    ))}
                </TextField>
            </form>
        );
    }
}

MuiForms.propTypes = {
    classes: PropTypes.object.isRequired
};

export default withStyles(styles, { withTheme: true })(MuiForms);

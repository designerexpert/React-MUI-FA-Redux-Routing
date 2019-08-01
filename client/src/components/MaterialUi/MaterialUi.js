import React from "react";
import PropTypes from "prop-types";
import Typography from "@material-ui/core/Typography";
import Button from "@material-ui/core/Button";
import { withStyles } from "@material-ui/core/styles";
import Fab from "@material-ui/core/Fab";
import AddIcon from "@material-ui/icons/Add";
import EditIcon from "@material-ui/icons/Edit";
import DeleteIcon from "@material-ui/icons/Delete";
import AppBar from "@material-ui/core/AppBar";
import Tabs from "@material-ui/core/Tabs";
import Tab from "@material-ui/core/Tab";

const styles = theme => ({
    root: {
        width: "100%",
        position: "relative",
        minHeight: 200,
        maxWidth: 500
    },
    button: {
        margin: theme.spacing.unit
    },
    fab: {
        margin: theme.spacing.unit
    },
    extendedIcon: {
        marginRight: theme.spacing.unit
    }
});

class MaterialUi extends React.Component {
    state = { value: 0 };
    handleChange = (e, value) => {
        this.setState({ value });
    };
    render() {
        const { classes } = this.props;
        return (
            <div className={classes.root}>
                <AppBar position="static" color="default">
                    <Tabs
                        value={this.state.value}
                        onChange={this.handleChange}
                        indicatorColor="primary"
                        textColor="primary"
                        variant="fullWidth"
                    >
                        <Tab label="Material UI" />
                        <Tab label="AppBar" />
                        <Tab label="Component" />
                    </Tabs>
                </AppBar>
                <Typography component="h1" variant="h3" gutterBottom>
                    M.U.I. (H1) Look Like H3
                </Typography>
                <Typography component="h2" variant="h4" gutterBottom>
                    M.U.I. (H2) Look Like H4
                </Typography>
                <Typography component="h3" variant="h5" gutterBottom>
                    M.U.I. (H3) Look Like H5
                </Typography>
                <Typography variant="body1" gutterBottom>
                    M.U.I. (body1) The purpose of this text is to display
                    content of a large text section. It will help illustrate how
                    the Material UI Component displays the text size and how it
                    contains it.The purpose of this text is to display content
                    of a large text section. It will help illustrate how the
                    Material UI Component displays the text size and how it
                    contains it.
                </Typography>
                <Typography variant="button" gutterBottom>
                    M.U.I. (Button) Button Text
                </Typography>
                <Button
                    variant="contained"
                    color="primary"
                    className={classes.button}
                >
                    PRIMARY
                </Button>
                <Button
                    variant="contained"
                    color="secondary"
                    className={classes.button}
                >
                    SECONDARY
                </Button>
                <Button
                    variant="contained"
                    color="secondary"
                    disabled
                    className={classes.button}
                >
                    DISABLED
                </Button>
                <br />
                <Button
                    variant="outlined"
                    color="primary"
                    className={classes.button}
                >
                    PRIMARY
                </Button>
                <Button
                    variant="outlined"
                    color="secondary"
                    className={classes.button}
                >
                    SECONDARY
                </Button>
                <Button
                    variant="outlined"
                    color="secondary"
                    disabled
                    className={classes.button}
                >
                    DISABLED
                </Button>
                <br />
                <Fab color="primary" aria-label="Add" className={classes.fab}>
                    <AddIcon />
                </Fab>
                <Fab
                    variant="extended"
                    aria-label="Add"
                    className={classes.fab}
                >
                    <AddIcon className={classes.extendedIcon} />
                    DO MORE
                </Fab>
                <Fab
                    color="secondary"
                    aria-label="Edit"
                    className={classes.fab}
                >
                    <EditIcon />
                </Fab>
                <Fab disabled aria-label="Delete" className={classes.fab}>
                    <DeleteIcon />
                </Fab>
            </div>
        );
    }
}

MaterialUi.propTypes = {
    classes: PropTypes.object.isRequired
};

export default withStyles(styles, { withTheme: true })(MaterialUi);

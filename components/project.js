import { makeStyles } from "@material-ui/core/styles";
import Card from "@material-ui/core/Card";
import clsx from "clsx";
import moment from "moment";
import CardHeader from "@material-ui/core/CardHeader";
import CardMedia from "@material-ui/core/CardMedia";
import CardContent from "@material-ui/core/CardContent";
import CardActions from "@material-ui/core/CardActions";
import Link from "@material-ui/core/Link";
import Collapse from "@material-ui/core/Collapse";
import Avatar from "@material-ui/core/Avatar";
import IconButton from "@material-ui/core/IconButton";
import Typography from "@material-ui/core/Typography";
import { blue } from "@material-ui/core/colors";
import ExpandMoreIcon from "@material-ui/icons/ExpandMore";
import MoreVertIcon from "@material-ui/icons/MoreVert";
import DeleteIcon from "@material-ui/icons/Delete";
import EditIcon from "@material-ui/icons/Edit";

const useStyles = makeStyles(theme => ({
  root: {
    maxWidth: 500,
    margin: "2rem auto"
  },
  media: {
    height: 0,
    paddingTop: "56.25%"
  },
  expand: {
    transform: "rotate(0deg)",
    marginLeft: "auto",
    transition: theme.transitions.create("transform", {
      duration: theme.transitions.duration.shortest
    })
  },
  expandOpen: {
    transform: "rotate(180deg)"
  },
  avatar: {
    backgroundColor: blue[500]
  },
  user: {
    "&:hover": {
      cursor: "pointer"
    }
  }
}));

export default function Project({ project }) {
  const classes = useStyles();
  const [expanded, setExpanded] = React.useState(false);

  const handleExpandClick = () => {
    setExpanded(!expanded);
  };
  return (
    <Card className={classes.root}>
      <CardHeader
        avatar={
          <Avatar aria-label="recipe" className={classes.avatar}>
            {/* {auther.firstName.charAt(0) + auther.lastName.charAt(0)} */}
          </Avatar>
        }
        action={
          <IconButton aria-label="settings">
            <MoreVertIcon />
          </IconButton>
        }
        className={classes.user}
        title="user"
        subheader={moment(project.start).format("MMMM D, YYYY")}
        // onClick={}
      />
      <CardMedia
        className={classes.media}
        image={project.image}
        title="Paella dish"
      />
      <CardContent>
        <Typography variant="body2" color="textSecondary" component="p">
          {project.name}
        </Typography>
      </CardContent>
      <CardActions disableSpacing>
        <div className="d-flex">
          <IconButton
            aria-label="delete"
            style={{ color: "#2196f3" }}
            // onClick={}
            className="m-2"
          >
            <DeleteIcon />
          </IconButton>

          <Link
            className="nav-link"
            //to={}
          >
            <IconButton aria-label="edit" style={{ color: "#2196f3" }}>
              <EditIcon />
            </IconButton>
          </Link>
        </div>
        <Link
          onClick={handleExpandClick}
          component="button"
          style={{ color: "#2196f3" }}
          className={classes.expand}
        >
          More Details
          <IconButton
            aria-expanded={expanded}
            className={clsx(classes.expand, {
              [classes.expandOpen]: expanded
            })}
            aria-label="show more"
          >
            <ExpandMoreIcon />
          </IconButton>
        </Link>
      </CardActions>
      <Collapse in={expanded} timeout="auto" unmountOnExit>
        <CardContent>
          <Typography paragraph>Details</Typography>
          <Typography paragraph>Achieved : {project.achieved}</Typography>
        </CardContent>
      </Collapse>
    </Card>
  );
}

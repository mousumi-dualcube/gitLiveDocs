import React from 'react';
import custom from '../css/custom.css';
import classnames from 'classnames';
import { Card, CardMedia, CardTitle, CardText, CardActions } from 'pivot-ui/components/card';
import { Button, IconButton, BrowseButton } from 'pivot-ui/components/button';
import { Link } from 'react-router';

const ListCard = classnames(custom.cards, custom.listCard);

const RenderCard = (props) => (
  
  <Card className={custom.cards} pattern={props.pattern}>
    <Link to={props.option.href} className={custom.cardItemHover}>
      <div className={custom.CardMediaOption}>
        <CardMedia
          aspectRatio="wide"
          image={props.option.imagePath} 
          className={custom.ListCardMedia}
        />
        <div className={custom.CardDetails}>
          <CardTitle
            title={props.option.title}
            className={custom.text_bold}
          />
          <CardText className={custom.description}>{props.option.text}</CardText>
          <CardActions theme={custom} className={custom.buttons}>
            <span>
              <i className="fa fa-file-o" aria-hidden="true"></i>
              <label>{props.option.version}</label>
            </span>
            <span>
              <i className="fa fa-clock-o" aria-hidden="true"></i>
              <label>
                {props.option.date}
              </label>
            </span>
          </CardActions>
        </div>
      </div>
    </Link>
  </Card>
);

export default RenderCard;

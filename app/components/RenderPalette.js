import 'normalize.css';
import React, { Component } from 'react';
import classnames from 'classnames';
import custom from '../css/custom.css';
import { Card, CardMedia, CardTitle, CardText, CardActions } from 'pivot-ui/lib/card';
import {Button} from 'pivot-ui/lib/button';

class RenderPalette extends React.Component {
  render() {
    return (
      <div className={custom.paletteCardCont}>
        <Card style={{width: '350px'}} className={custom.paletteCard}>
          <CardMedia
            aspectRatio="wide"
            style={{"backgroundColor":this.props.color}}
          />
          <CardTitle
            title={this.props.title}
            subtitle={this.props.color}
          />
        </Card>
      </div>
    );
  }
}

export default RenderPalette
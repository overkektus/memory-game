import React, { Component } from 'react';
import { Layout, Card } from 'antd';
import './GameBoard.css';

const { Footer, Content } = Layout;

class GameBoard extends Component {
  componentDidMount() {
    console.log('Component did mount')
  }

  render() {
    return (
      <Layout style={{ height: '-webkit-fill-available'}}>
        <Content className='game-board'>
          <Card>
            <Card.Grid>
              Content
            </Card.Grid>
            <Card.Grid>
              Content
            </Card.Grid>
            <Card.Grid>
              Content
            </Card.Grid>
            <Card.Grid>
              Content
            </Card.Grid>
          </Card>
        </Content>
      </Layout>
    );
  }
}

export default GameBoard;

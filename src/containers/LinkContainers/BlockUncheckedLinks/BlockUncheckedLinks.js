import * as React from 'react';


export default class BlockUnchekedLinks extends React.Component {
  render() {
     return (
     <div style={{float: 'left', height: '600px', weight: '400px', marging: '30px'}}>
     {this.props.children}
     </div>
   )
  }
}

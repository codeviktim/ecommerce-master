import React, { Component } from 'react';
import MenuItem from '../menu-item/Menu-item.component';

import './directory.style.scss'
interface State{
  sections : any
}
interface Props{
}

class Directory extends Component<Props,State>{
    constructor(props:any){
      super(props);
      this.state = {
        sections: [
            {
              title: 'hats',
              imageUrl: 'https://i.ibb.co/cvpntL1/hats.png',
              id: 1
            },
            {
              title: 'jackets',
              imageUrl: 'https://i.ibb.co/px2tCc3/jackets.png',
              id: 2
            },
            {
              title: 'sneakers',
              imageUrl: 'https://i.ibb.co/0jqHpnp/sneakers.png',
              id: 3
            },
            {
              title: 'womens',
              imageUrl: 'https://i.ibb.co/GCCdy8t/womens.png',
              size: 'large',
              id: 4
            },
            {
              title: 'mens',
              imageUrl: 'https://i.ibb.co/R70vBrQ/men.png',
              size: 'large',
              id: 5
            }
          ]
          
      }
    }
    render() {
         const sections = this.state.sections;
        console.log(sections)
        return (
            <div className='directory-menu'>
              {
                sections.map(({title,imageUrl,size, id}:any) => (
                    <MenuItem title={title} key={id} imageUrl={imageUrl} size={size}/>
                ))  
              }
            </div>
        );
    }
}

export default Directory;
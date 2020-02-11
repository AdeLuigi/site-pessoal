import React, { useEffect, useState } from 'react';
//import api from './services/api';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPlus, faHeading, faAlignLeft, faFolderOpen } from '@fortawesome/free-solid-svg-icons';

import Menu from './Menu';
import Footer from './Footer';
import './css/Post.css';


function Post() {
  window.scrollTo(0,0);

  return (
    
    <>
      <Menu text="Artigo"/>
      <body>
        <textarea name="" id="" cols="30" rows="10"></textarea>
        <a href="#" class="float" id="menu-share">
        <i class="fa fa-share my-float"><FontAwesomeIcon icon={faPlus} /></i>
        </a>
        <ul>
            <li><a href="#">
           
            <i class="fa fa-google-plus my-float"> <FontAwesomeIcon  icon={ faHeading }/></i>
                </a>
            </li>
            <li><a href="#">
                <i class="fa fa-google-plus my-float"> <FontAwesomeIcon icon={faAlignLeft} /></i>
                </a>
            </li>
            <li><a href="#">
                <i class="fa fa-twitter my-float"><FontAwesomeIcon icon={faFolderOpen} /></i>
                </a>
            </li>
        </ul>
      <Footer/>
      </body>
   </> 

  );
}

export default Post;

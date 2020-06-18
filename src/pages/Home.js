import React from 'react';
import '../App.css'
import { Link } from 'react-router-dom'

const Home = (props) => {

const { params } = props

function parentClick(id){
  alert("hi ")
}


  return (
    <div>
      <div className="flex-container wrap">
        {props.bs_search_detail_info.map(bs_search_detail_info =>
          <div className="flex-containter wrap">
            <img className="flex-item" src={bs_search_detail_info.bs_search_detail_image_file}></img>
            <Link to={`/${bs_search_detail_info.bs_search_detail_info_id}`}>{bs_search_detail_info.bs_search_detail_name}</Link>
          </div>
        )}
      </div>
    </div>
  );
}

export default Home;

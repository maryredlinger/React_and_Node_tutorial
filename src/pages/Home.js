import React from 'react';
import '../App.css'

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
            <div>{bs_search_detail_info.bs_search_detail_name}</div>
          </div>
        )}
      </div>
    </div>
  );
}

export default Home;

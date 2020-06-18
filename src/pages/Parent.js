import React from 'react'

const Parent = (props) => {
    console.log(props.bs_search_detail_info.bs_search_detail_info_id)
    return(
        <div>
            <h1>hi</h1>
            {props.bs_search_detail_info.bs_search_detail_info_id}
        </div>
    )
}

export default Parent;
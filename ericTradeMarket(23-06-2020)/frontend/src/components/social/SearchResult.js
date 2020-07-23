import React from "react";
import { useSelector, useDispatch } from "react-redux";

// export default class SearchPage extends Component {
//     constructor(props) {
//         super(props);

//         this.state = {
//             searchResult : []
//         }
//         console.log('props...', props);
//     }
//     render() {
//         return(
//             <div>
//                 <div className="card">
//                     <div className="card-body">
//                         <div className="row">
//                             <div className="col-12" style={{border:"solid 1px black"}}>
//                                 col-4
//                             </div>
//                         </div>
//                     </div>
//                 </div>
//             </div>
//         )
//     }
// }

function SearchResult(props) {
  //   const searchStateData = useSelector((state) => {
  //     return state.header.searchInfo;
  //   });

  console.log(props.value);
  return (
    <div>
      <div className="card">
        <div className="card-body">
          <div className="row">
            <div className="col-12" style={{ border: "solid 1px black" }}>
              col-4
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default SearchResult;

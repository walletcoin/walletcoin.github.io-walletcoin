import React from 'react';
import ListFiltersForm from './ListFiltersForm'
import {Button} from 'antd'

function ListActionsBar({actions={},LIST={}}){
  return (
    <div>
        <div className="row align-items-center p10 zb-b-b">
            <div className="col-auto">
                <ListFiltersForm actions={actions} LIST={LIST} />
            </div>
            <div className="col">

            </div>
            <div className="col-auto">
            </div>
        </div>
    </div>
  );
}
export default ListActionsBar;

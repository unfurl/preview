import React ,{useState, useEffect, FormEvent} from 'react';

const Container: React.FunctionComponent = () => {
    const [urlState, urlSetState] = useState("https://unfurl.io");
    const [modeState,modeSetState] = useState("detailed");
    const [layoutState,layoutSetState] = useState("list");
    const [tempurlState, tempurlSetState] = useState("https://unfurl.io");

    const submitHandler = (e : FormEvent) => {
        urlSetState(tempurlState)
        e.preventDefault();
    }
  return (
      <div className="d-flex justify-content-center">
                <div className="row container" style={{margin:0,marginTop:60,justifyContent:'space-between'}}>
                    <div className="col-sm-5" >
                        <div className="inputWrapper">
                            <form onSubmit ={e => submitHandler(e)}>
                            <div className="form-group"  >
                                <label>Write Website URL</label>
                                <input type="text" className="form-control" value={tempurlState}  placeholder="Write URL"  onChange={e => tempurlSetState(e.target.value)} />
                            </div>
                            <div className="form-group">
                                <label>Select Mode</label>
                                <select defaultValue="detailed" className="form-control" onChange={e => modeSetState(e.target.value)}>
                                <option value="detailed">Detailed</option>
                                <option value="compact">Compact</option>
                                <option value="simple">Simple</option>
                                </select>
                            </div>
                            <div className="form-group">
                                <label>Select Layout</label>
                                <select defaultValue="list" className="form-control" onChange={e => layoutSetState(e.target.value)}>
                                <option value="list">List</option>
                                <option value="grid">Grid</option>
                                </select>
                            </div>
                            <div className="form-group">
                                <input className="btn btn-primary btn-block" type="submit" value="Generate Preview" />
                            </div>
                            </form>
                        </div>
                    </div>
                    <unf-preview className="col-sm-6" style={{width:"50%"}} url={urlState} layout={layoutState} mode={modeState}></unf-preview> 
                </div>
      </div>
    
    
  )
};

export default Container;
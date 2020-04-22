import React ,{useState, useEffect, FormEvent} from 'react';

const Container: React.FunctionComponent<> = () => {
    const [urlState, urlSetState] = useState("https://unfurl.io");
    const [modeState,modeSetState] = useState("detailed");
    const [layoutState,layoutSetState] = useState("grid");
    const [tempurlState, tempurlSetState] = useState("https://unfurl.io");

    const submitHandler = (e : FormEvent) => {
        urlSetState(tempurlState)
        e.preventDefault();
    }
  return (
    <div style={{display:'flex',alignItems:'center',flexDirection:'column',marginTop:15}}>
        <div className="container" style={{maxWidth:'900px'}} >
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
                    <select defaultValue="grid" className="form-control" onChange={e => layoutSetState(e.target.value)}>
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
        <unf-preview url={urlState} layout={layoutState} mode={modeState}></unf-preview> 
    </div>
    
  )
};

export default Container;
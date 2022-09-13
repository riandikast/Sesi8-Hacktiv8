import react from 'react'


function body(){
      
      return (
            <>
            <div className='p-5 mb-4 bg-light rounded-3'> 
                  <div className='container-fluid py-5'>
                        <h1 className='display-5 fw-bold'>First Paragraph</h1>
                        <p className='col-md-8 fs-4'>Using series of utilities, you can create this jumbotron, just like the one in previous version of bootstrap, check out the examples below for how you  can remix and restyle it to your liking</p>
                        <button className='btn btn-primary btn-lg' type='button' data-bs-toogle='modal' data-bs-target='#exampleModal'> Click here to show modal box</button>
                  </div>
            </div>    
            
            {/* modal */}
            <div className='modal fade' id='exampleModal' tabindex='-1' aria-labelledby='exampleLabel' aria-hidden='true'>
                  <div className='modal-dialog'>
                        <div className='modal-content'>
                              <div className='modal-header'>
                                    <h5 className='modal-title' id='exampleLabel'>Modal Title</h5>
                                    <button type='button' className='btn-close' data-bs-dismiss='modal' aria-label='close'> </button>
                              </div>

                              <div className='modal-body'> this is my first modal box</div>

                              <div className='modal-footer'>

                                    <button type='button' className='btn btn-secondary' data-bs-dismiss='modal'>Close</button>
                                    <button type='button' className='btn btn-primary' >Save Changes</button>
                              </div>
                        </div>
                  </div>
            </div>
            </> 
      )
   
}

export default body
import React ,{useState} from 'react'

export default function About(props) {
    let MyStyle={
        color:props.mode==='dark'?'white':'black',
      backgroundColor: props.mode === 'dark' ?'#576F72': 'white',
      border:'1px solid',
      borderColor: props.mode === 'dark' ? 'white' : 'black',
    }






  return (
    <div className="container" style={MyStyle}>
        <h1 className="my-3" >About Us</h1>
        <div className="accordion" id="accordionExample">
  <div className="accordion-item">
    <h2 className="accordion-header" id="headingOne">
      <button className="accordion-button" style={MyStyle} type="button" data-bs-toggle="collapse" data-bs-target="#collapseOne" aria-expanded="true" aria-controls="collapseOne">
        What is TextUtils ?
      </button>
    </h2>
    <div id="collapseOne" className="accordion-collapse collapse show" aria-labelledby="headingOne" data-bs-parent="#accordionExample">
      <div className="accordion-body" style={MyStyle}>
              <strong>It is simply a set of utility functions to do operations on String objects.</strong> In fact, the whole class doesn't have any instance fields or methods. Everything is static. Consider it like a container to group functions with a text-based semantic. Many of them could have been methods of a String inherited class or CharSequence inherited class.
      </div>
    </div>
  </div>
  <div className="accordion-item">
    <h2 className="accordion-header" id="headingTwo">
      <button className="accordion-button collapsed" style={MyStyle} type="button" data-bs-toggle="collapse" data-bs-target="#collapseTwo" aria-expanded="false" aria-controls="collapseTwo">
              Why we created it?
      </button>
    </h2>
    <div id="collapseTwo" className="accordion-collapse collapse" aria-labelledby="headingTwo" data-bs-parent="#accordionExample">
      <div className="accordion-body" style={MyStyle}>
              <strong>Text-Utils.com was born in 2014.</strong>as part of a learning exercise to practice our programming skills.In almost 10 years of existence, we continue to refactor, redesign, improve, and implement new features.And we could say that we learned a lot since we started, by including the experience here and in the overall development world.
      </div>
    </div>
  </div>
  <div className="accordion-item">
    <h2 className="accordion-header" id="headingThree">
      <button className="accordion-button collapsed" type="button" style={MyStyle} data-bs-toggle="collapse" data-bs-target="#collapseThree" aria-expanded="false" aria-controls="collapseThree">
              Why is it different?
      </button>
    </h2>
    <div id="collapseThree" className="accordion-collapse collapse" aria-labelledby="headingThree" data-bs-parent="#accordionExample">
      <div className="accordion-body" style={MyStyle}>
              <strong>Fast, secure and easy. </strong> This is a summary of what Text-Utils.com is. All we design is intended to be fast, really fast. Other than that, all our utilities are client-side, meaning your data will not go through our servers to be processed. Your data is secure. Finally, Text-Utils.com is also quite easy. Everything can be found on the page very quickly, in just a few clicks.


      </div>
    </div>
  </div>
</div>
       
    </div>
  )
}

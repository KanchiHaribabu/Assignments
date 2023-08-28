import React3 from "react"
import Employee from "./Employee"

const Employeeid = () => {
    return (
        <>
        <h1 Class="my-5">Employeecards</h1>
            <div class="row row-cols-1 row-cols-md-3 g-5">
                <div class="col">
                    <div class="card">
                        <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSJ7L3iB6yvLsGKri3FfKX9Ao4UXQElAoUA7w&usqp=CAU" class="card-img-top" alt="..."/>
                            <div class="card-body">
                                <h1 class="card-text">Employee 1</h1>
                                <Employee id='01' name='HemaNatesh' salary='500000'/>
                            </div>
                    </div>
                </div>
                <div class="col">
                    <div class="card">
                        <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSJ7L3iB6yvLsGKri3FfKX9Ao4UXQElAoUA7w&usqp=CAU" class="card-img-top" alt="..." />
                        <div class="card-body">
                            <h1 Class="card-text">Employee 2</h1>
                            <Employee id='02' name='Shamanth' salary='5000000'/>
                        </div>
                    </div>
                </div>
                <div class="col">
                    <div class="card">
                        <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSJ7L3iB6yvLsGKri3FfKX9Ao4UXQElAoUA7w&usqp=CAU" class="card-img-top" alt="..." />
                        <div class="card-body">
                            <h1 class="card-text">Employee 3</h1>
                            <Employee id='03' name='Nithish Varma' salary='500000'/>
                        </div>
                    </div>
                </div>
                <div class="col">
                    <div class="card">
                        <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSJ7L3iB6yvLsGKri3FfKX9Ao4UXQElAoUA7w&usqp=CAU" class="card-img-top" alt="..." />
                        <div class="card-body">
                            <h1 Class="crad-text">Employee 4</h1>
                            <Employee id='04' name='Haribabu' salary='500000'/>
                        </div>
                    </div>
                </div>
                <div class="col">
                    <div class="card">
                        <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSJ7L3iB6yvLsGKri3FfKX9Ao4UXQElAoUA7w&usqp=CAU" class="card-img-top" alt="..." />
                        <div class="card-body">
                            <h1 Class="crad-text">Employee 5</h1>
                            <Employee id='05' name='Hari' salary='250000'/>
                        </div>
                    </div>
                </div>
                <div class="col">
                    <div class="card">
                        <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSJ7L3iB6yvLsGKri3FfKX9Ao4UXQElAoUA7w&usqp=CAU" class="card-img-top" alt="..." />
                        <div class="card-body">
                            <h1 Class="crad-text">Employee 6</h1>
                            <Employee id='06' name='Babu' salary='250000'/>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}
export default Employeeid
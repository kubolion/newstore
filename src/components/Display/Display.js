import React from 'react';
import {ProductCard, Carts, UserCard, Login} from "../displays";



const Display = (props) => {
const {routeState} = props;
    console.log(routeState)

    return (

        <main>
        <section className="container mx-auto grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-3 ">
            {
            routeState === 'products' ?
                props.data.map((item) => <ProductCard key={item.id} product={item}/> )
                :
                routeState ===  'users' ?
                    props.data.map((item) => <UserCard key={item.id} product={item}/> )
                    :
                    routeState === 'carts' ?
                        props.data.map((item) => <Carts key={item.id} product={item}/> ) :
                        routeState === 'login'  ?
                        <Login/> :
                            <div>error</div>

            }
        </section>
        </main>
    );
};

export default Display;
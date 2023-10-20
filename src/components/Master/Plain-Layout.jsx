import React, {Fragment} from "react";
import {Toaster} from "react-hot-toast";
import AppNavBar from "@/components/Master/AppNavBar";
const PlainLayout = (props) => {
    return (
        <Fragment>
            <AppNavBar/>
            {props.children}
            <Toaster position="bottom-center"/>
        </Fragment>
    );
};
export default PlainLayout;
import React, { useState, useEffect } from "react";
import Consulta from "./Consulta";

function Presidentes() {
    return(
        Consulta('https://api-colombia.com/api/v1/President')
    );
}

export default Presidentes;

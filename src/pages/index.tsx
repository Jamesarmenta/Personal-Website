// This is a skeleton starter React page generated by Plasmic.
// This file is owned by you, feel free to edit as you see fit.
import * as React from "react";
import * as ph from "@plasmicapp/react-web/lib/host";

import { ExperimentContext } from "../components/plasmic/jamesarmenta/PlasmicGlobalVariant__Experiment";
import { PlasmicHomepage } from "../components/plasmic/jamesarmenta/PlasmicHomepage";
import { useRouter } from "next/router";

function Homepage() {
  return (
    <ExperimentContext.Provider value={undefined}>
      <ph.PageParamsProvider
        params={useRouter()?.query}
        query={useRouter()?.query}
      >
        <PlasmicHomepage />
      </ph.PageParamsProvider>
    </ExperimentContext.Provider>
  );
}

export default Homepage;

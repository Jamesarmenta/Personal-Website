// @ts-nocheck
/* eslint-disable */
/* tslint:disable */
/* prettier-ignore-start */

/** @jsxRuntime classic */
/** @jsx createPlasmicElementProxy */
/** @jsxFrag React.Fragment */

// This class is auto-generated by Plasmic; please do not edit!
// Plasmic Project: uqLoCtoBYZiDt8D79DKGpo
// Component: LdyxwopXo0

import * as React from "react";

import Head from "next/head";
import Link, { LinkProps } from "next/link";
import { useRouter } from "next/router";

import * as p from "@plasmicapp/react-web";
import * as ph from "@plasmicapp/react-web/lib/host";

import {
  hasVariant,
  classNames,
  wrapWithClassName,
  createPlasmicElementProxy,
  makeFragment,
  MultiChoiceArg,
  SingleBooleanChoiceArg,
  SingleChoiceArg,
  pick,
  omit,
  useTrigger,
  StrictProps,
  deriveRenderOpts,
  ensureGlobalVariants
} from "@plasmicapp/react-web";
import { TabButton } from "@plasmicpkgs/plasmic-tabs"; // plasmic-import: 5jaBI7A4_ak/codeComponent

import "@plasmicapp/react-web/lib/plasmic.css";

import projectcss from "./plasmic_jamesarmenta.module.css"; // plasmic-import: uqLoCtoBYZiDt8D79DKGpo/projectcss
import sty from "./PlasmicTabTrigger.module.css"; // plasmic-import: LdyxwopXo0/css

import IconIcon from "../plasmic_tabs/icons/PlasmicIcon__Icon"; // plasmic-import: 8K40faRNhuCj/icon

export type PlasmicTabTrigger__VariantMembers = {};
export type PlasmicTabTrigger__VariantsArgs = {};
type VariantPropType = keyof PlasmicTabTrigger__VariantsArgs;
export const PlasmicTabTrigger__VariantProps = new Array<VariantPropType>();

export type PlasmicTabTrigger__ArgsType = {
  destination?: string;
  children?: React.ReactNode;
};
type ArgPropType = keyof PlasmicTabTrigger__ArgsType;
export const PlasmicTabTrigger__ArgProps = new Array<ArgPropType>(
  "destination",
  "children"
);

export type PlasmicTabTrigger__OverridesType = {
  root?: p.Flex<typeof TabButton>;
  button?: p.Flex<"button">;
  freeBox?: p.Flex<"div">;
  text?: p.Flex<"div">;
  svg?: p.Flex<"svg">;
};

export interface DefaultTabTriggerProps {
  destination?: string;
  children?: React.ReactNode;
  className?: string;
}

const __wrapUserFunction =
  globalThis.__PlasmicWrapUserFunction ?? ((loc, fn) => fn());
const __wrapUserPromise =
  globalThis.__PlasmicWrapUserPromise ??
  (async (loc, promise) => {
    return await promise;
  });

function useNextRouter() {
  try {
    return useRouter();
  } catch {}
  return undefined;
}

function PlasmicTabTrigger__RenderFunc(props: {
  variants: PlasmicTabTrigger__VariantsArgs;
  args: PlasmicTabTrigger__ArgsType;
  overrides: PlasmicTabTrigger__OverridesType;
  forNode?: string;
}) {
  const { variants, overrides, forNode } = props;
  const __nextRouter = useNextRouter();

  const $ctx = ph.useDataEnv?.() || {};
  const args = React.useMemo(
    () =>
      Object.assign(
        {
          destination: "tab2" as const
        },
        props.args
      ),
    [props.args]
  );
  const $props = {
    ...args,
    ...variants
  };
  const refsRef = React.useRef({});
  const $refs = refsRef.current;

  const currentUser = p.useCurrentUser?.() || {};

  const [$queries, setDollarQueries] = React.useState({});

  return (
    <TabButton
      data-plasmic-name={"root"}
      data-plasmic-override={overrides.root}
      data-plasmic-root={true}
      data-plasmic-for-node={forNode}
      className={classNames(
        "__wab_instance",
        projectcss.root_reset,
        projectcss.plasmic_default_styles,
        projectcss.plasmic_mixins,
        projectcss.plasmic_tokens,
        sty.root
      )}
      tabKey={args.destination}
    >
      <button
        data-plasmic-name={"button"}
        data-plasmic-override={overrides.button}
        className={classNames(projectcss.all, projectcss.button, sty.button)}
      >
        {p.renderPlasmicSlot({
          defaultContents: (
            <p.PlasmicImg
              alt={""}
              className={classNames(sty.img__ti0Vl)}
              displayHeight={"100%" as const}
              displayMaxHeight={"none" as const}
              displayMaxWidth={"none" as const}
              displayMinHeight={"0" as const}
              displayMinWidth={"0" as const}
              displayWidth={"100%" as const}
              loading={"lazy" as const}
              src={{
                src: "/plasmic/jamesarmenta/images/postalService.jpg",
                fullWidth: 654,
                fullHeight: 1000,
                aspectRatio: undefined
              }}
            />
          ),

          value: args.children
        })}
        {true ? (
          <p.Stack
            as={"div"}
            data-plasmic-name={"freeBox"}
            data-plasmic-override={overrides.freeBox}
            hasGap={true}
            className={classNames(projectcss.all, sty.freeBox)}
          >
            <div
              data-plasmic-name={"text"}
              data-plasmic-override={overrides.text}
              className={classNames(
                projectcss.all,
                projectcss.__wab_text,
                sty.text
              )}
            >
              {"next image"}
            </div>
            <IconIcon
              data-plasmic-name={"svg"}
              data-plasmic-override={overrides.svg}
              className={classNames(projectcss.all, sty.svg)}
              role={"img"}
            />
          </p.Stack>
        ) : null}
      </button>
    </TabButton>
  ) as React.ReactElement | null;
}

const PlasmicDescendants = {
  root: ["root", "button", "freeBox", "text", "svg"],
  button: ["button", "freeBox", "text", "svg"],
  freeBox: ["freeBox", "text", "svg"],
  text: ["text"],
  svg: ["svg"]
} as const;
type NodeNameType = keyof typeof PlasmicDescendants;
type DescendantsType<T extends NodeNameType> =
  (typeof PlasmicDescendants)[T][number];
type NodeDefaultElementType = {
  root: typeof TabButton;
  button: "button";
  freeBox: "div";
  text: "div";
  svg: "svg";
};

type ReservedPropsType = "variants" | "args" | "overrides";
type NodeOverridesType<T extends NodeNameType> = Pick<
  PlasmicTabTrigger__OverridesType,
  DescendantsType<T>
>;
type NodeComponentProps<T extends NodeNameType> =
  // Explicitly specify variants, args, and overrides as objects
  {
    variants?: PlasmicTabTrigger__VariantsArgs;
    args?: PlasmicTabTrigger__ArgsType;
    overrides?: NodeOverridesType<T>;
  } & Omit<PlasmicTabTrigger__VariantsArgs, ReservedPropsType> & // Specify variants directly as props
    /* Specify args directly as props*/ Omit<
      PlasmicTabTrigger__ArgsType,
      ReservedPropsType
    > &
    /* Specify overrides for each element directly as props*/ Omit<
      NodeOverridesType<T>,
      ReservedPropsType | VariantPropType | ArgPropType
    > &
    /* Specify props for the root element*/ Omit<
      Partial<React.ComponentProps<NodeDefaultElementType[T]>>,
      ReservedPropsType | VariantPropType | ArgPropType | DescendantsType<T>
    >;

function makeNodeComponent<NodeName extends NodeNameType>(nodeName: NodeName) {
  type PropsType = NodeComponentProps<NodeName> & { key?: React.Key };
  const func = function <T extends PropsType>(
    props: T & StrictProps<T, PropsType>
  ) {
    const { variants, args, overrides } = React.useMemo(
      () =>
        deriveRenderOpts(props, {
          name: nodeName,
          descendantNames: [...PlasmicDescendants[nodeName]],
          internalArgPropNames: PlasmicTabTrigger__ArgProps,
          internalVariantPropNames: PlasmicTabTrigger__VariantProps
        }),
      [props, nodeName]
    );
    return PlasmicTabTrigger__RenderFunc({
      variants,
      args,
      overrides,
      forNode: nodeName
    });
  };
  if (nodeName === "root") {
    func.displayName = "PlasmicTabTrigger";
  } else {
    func.displayName = `PlasmicTabTrigger.${nodeName}`;
  }
  return func;
}

export const PlasmicTabTrigger = Object.assign(
  // Top-level PlasmicTabTrigger renders the root element
  makeNodeComponent("root"),
  {
    // Helper components rendering sub-elements
    button: makeNodeComponent("button"),
    freeBox: makeNodeComponent("freeBox"),
    text: makeNodeComponent("text"),
    svg: makeNodeComponent("svg"),

    // Metadata about props expected for PlasmicTabTrigger
    internalVariantProps: PlasmicTabTrigger__VariantProps,
    internalArgProps: PlasmicTabTrigger__ArgProps
  }
);

export default PlasmicTabTrigger;
/* prettier-ignore-end */

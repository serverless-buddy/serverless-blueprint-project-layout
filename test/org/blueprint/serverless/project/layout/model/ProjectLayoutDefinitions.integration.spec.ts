import {ProjectLayoutType} from "../../../../../../../src/org/blueprint/serverless/project/layout/model/ProjectLayoutType";
import {ProjectLayoutDefinitions} from "../../../../../../../src/org/blueprint/serverless/project/layout/model/ProjectLayoutDefinitions";
import {ProjectLayoutDefinition} from "../../../../../../../src/org/blueprint/serverless/project/layout/model/ProjectLayoutDefinition";

import {expect} from "chai";
import {ProjectLayoutMetaData} from "../../../../../../../src/org/blueprint/serverless/project/layout/model/ProjectLayoutMetaData";

describe("Project Layout Definitions (Integration)", () => {

    it("should load ProjectLayoutDefinition a nested layout type", () => {

        let projectLayoutDefinition: ProjectLayoutDefinition = new ProjectLayoutDefinitions().findBy(ProjectLayoutType.Nested,
            new ProjectLayoutMetaData("serverless-blueprint", "serverless"));

        expect(projectLayoutDefinition.projectName).to.equal("serverless-blueprint");
        expect(projectLayoutDefinition.hierarchyPaths()).to.deep.equal([
            "serverless-blueprint/src/serverless/controller",
            "serverless-blueprint/src/serverless/service",
            "serverless-blueprint/src/serverless/repository",
            "serverless-blueprint/test/serverless/controller",
            "serverless-blueprint/test/serverless/service",
            "serverless-blueprint/test/serverless/repository"
        ]);
    });

    it("should load ProjectLayoutDefinition a flat layout type", () => {

        let projectLayoutDefinition: ProjectLayoutDefinition = new ProjectLayoutDefinitions().findBy(ProjectLayoutType.Flat,
            new ProjectLayoutMetaData("serverless-blueprint", "serverless"));

        expect(projectLayoutDefinition.projectName).to.equal("serverless-blueprint");
        expect(projectLayoutDefinition.hierarchyPaths()).to.deep.equal([
            "serverless-blueprint/src/controller",
            "serverless-blueprint/src/service",
            "serverless-blueprint/src/repository",
            "serverless-blueprint/test/controller",
            "serverless-blueprint/test/service",
            "serverless-blueprint/test/repository"
        ]);
    });
});
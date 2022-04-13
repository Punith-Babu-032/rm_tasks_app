sap.ui.define([
    "sap/base/util/ObjectPath",
    "sap/ushell/services/Container"
], function (ObjectPath) {
    "use strict";

    // define ushell config
    ObjectPath.set(["sap-ushell-config"], {
        defaultRenderer: "fiori2",
        bootstrapPlugins: {
            "RuntimeAuthoringPlugin": {
                component: "sap.ushell.plugins.rta",
                config: {
                    validateAppVersion: false
                }
            },
            "PersonalizePlugin": {
                component: "sap.ushell.plugins.rta-personalize",
                config: {
                    validateAppVersion: false
                }
            }
        },
        renderers: {
            fiori2: {
                componentData: {
                    config: {
                        enableSearch: false,
                        rootIntent: "Shell-home"
                    }
                }
            }
        },
        services: {
            "LaunchPage": {
                "adapter": {
                    "config": {
                        "groups": [{
                            "title": "Risk Process Approval",
                            "tiles": [
                                {
                                    "tileType": "sap.ushell.ui.tile.DynamicTile",
                                    "properties": {
                                        "title": "My Tasks",
                                        "subtitle": "(Risk Champion)",
                                        "targetURL": "#Tasks-display",
                                        "numberFactor": "Nos.",
                                        "numberValue": "10",
                                        "icon": "sap-icon://approvals"
                                    }
                                }]
                        }, {
                            "title": "Risk Proposal",
                            "tiles": [
                                {
                                    "tileType": "sap.ushell.ui.tile.StaticTile",
                                    "properties": {
                                        "title": "Risk Proposal",
                                        "targetURL": "#RiskProposalApp-display"
                                    }
                                }]
                        },
                        {
                            "title": "Risk Assessment",
                            "tiles": [
                                {
                                    "tileType": "sap.ushell.ui.tile.StaticTile",
                                    "properties": {
                                        "title": "Collaborative Risk Assessessment",
                                        "targetURL": "#RiskAssessApp-display"
                                    }
                                },
                                {
                                    "tileType": "sap.ushell.ui.tile.StaticTile",
                                    "properties": {
                                        "title": "Perform Risk Assessessment",
                                        "targetURL": "#RiskAssessApp2-display"
                                    }
                                }]
                        },
                        {
                            "title": "Risk Response",
                            "tiles": [
                                {
                                    "tileType": "sap.ushell.ui.tile.StaticTile",
                                    "properties": {
                                        "title": "Risk Response / Mitigation Update",
                                        "targetURL": "#RiskAssessApp3-display"
                                    }
                                },
                                {
                                    "tileType": "sap.ushell.ui.tile.StaticTile",
                                    "properties": {
                                        "title": "KRI Value Input",
                                        "targetURL": "#RiskAssessApp3-display"
                                    }
                                }]
                        }]
                    }
                }
            },
            "ClientSideTargetResolution": {
                "adapter": {
                    "config": {
                        "inbounds": {
                            "RiskProposal-display": {
                                "semanticObject": "RiskProposalApp",
                                "action": "display",
                                "description": "Risk Proposal Request",
                                "title": "Risk Proposal Request",
                                "signature": {
                                    "parameters": {}
                                },
                                "resolutionResult": {
                                    "applicationType": "SAPUI5",
                                    "additionalInformation": "SAPUI5.Component=gmriskproposal",
                                    "url": "../resources/gmriskproposal"
                                }
                            },
                            "RiskAssess-display": {
                                "semanticObject": "RiskAssessApp",
                                "action": "display",
                                "description": "Risk Assess Request",
                                "title": "Risk Assess Request",
                                "signature": {
                                    "parameters": {}
                                },
                                "resolutionResult": {
                                    "applicationType": "SAPUI5",
                                    "additionalInformation": "SAPUI5.Component=grcriskassess",
                                    "url": "../resources/grcriskassess"
                                }
                            },
                            "RiskAssess2-display": {
                                "semanticObject": "RiskAssessApp2",
                                "action": "display",
                                "description": "Risk Assess Request",
                                "title": "Risk Assess Request",
                                "signature": {
                                    "parameters": {}
                                },
                                "resolutionResult": {
                                    "applicationType": "SAPUI5",
                                    "additionalInformation": "SAPUI5.Component=grcriskassess2",
                                    "url": "../resources/grcriskassess2"
                                }
                            },
                            "Tasks-display": {
                                "semanticObject": "Tasks",
                                "action": "display",
                                "description": "Tasks",
                                "title": "My Tasks",
                                "signature": {
                                    "parameters": {}
                                },
                                "resolutionResult": {
                                    "applicationType": "SAPUI5",
                                    "additionalInformation": "SAPUI5.Component=grctasks",
                                    "url": sap.ui.require.toUrl("grctasks")
                                }
                            }
                        }
                    }
                }
            },
            NavTargetResolution: {
                config: {
                    "enableClientSideTargetResolution": true
                }
            }
        }
    });

    var oFlpSandbox = {
        init: function () {
			/**
			 * Initializes the FLP sandbox
			 * @returns {Promise} a promise that is resolved when the sandbox bootstrap has finshed
			 */

            // sandbox is a singleton, so we can start it only once
            if (!this._oBootstrapFinished) {
                this._oBootstrapFinished = sap.ushell.bootstrap("local");
                this._oBootstrapFinished.then(function () {
                    sap.ushell.Container.createRenderer().placeAt("content");
                });
            }

            return this._oBootstrapFinished;
        }
    };

    return oFlpSandbox;
});
import { TopFlows } from "report.types";

export const riverData = {
  name: "msw test mock",
  declaredType: "org.cuahsi.waterml.TimeSeriesResponseType",
  scope: "javax.xml.bind.JAXBElement$GlobalScope",
  value: {
    queryInfo: {
      queryURL:
        "http://waterservices.usgs.gov/nwis/iv/format=json&sites=06710247&startDT=2023-01-11T00:05:03.381Z&endDT=2023-01-18T00:05:03.381Z&parameterCd=00060,00065&siteStatus=all",
      criteria: {
        locationParam: "[ALL:06710247]",
        variableParam: "[00060, 00065]",
        timeParam: {
          beginDateTime: "2023-01-11T00:05:03.381",
          endDateTime: "2023-01-18T00:05:03.381",
        },
        parameter: [],
      },
      note: [
        {
          value: "[ALL:06710247]",
          title: "filter:sites",
        },
        {
          value:
            "[mode=RANGE, modifiedSince=null] interval={INTERVAL[2023-01-11T00:05:03.381Z/2023-01-18T00:05:03.381Z]}",
          title: "filter:timeRange",
        },
        {
          value: "methodIds=[ALL]",
          title: "filter:methodId",
        },
        {
          value: "2023-01-18T00:05:04.020Z",
          title: "requestDT",
        },
        {
          value: "c2411e30-96c3-11ed-8add-005056beda50",
          title: "requestId",
        },
        {
          value:
            "Provisional data are subject to revision. Go to http://waterdata.usgs.gov/nwis/help/?provisional for more information.",
          title: "disclaimer",
        },
        {
          value: "caas01",
          title: "server",
        },
      ],
    },
    timeSeries: [
      {
        sourceInfo: {
          siteName: "SOUTH PLATTE RIVER BELOW UNION AVE, AT ENGLEWOOD,C",
          siteCode: [
            {
              value: "06710247",
              network: "NWIS",
              agencyCode: "USGS",
            },
          ],
          timeZoneInfo: {
            defaultTimeZone: {
              zoneOffset: "-07:00",
              zoneAbbreviation: "MST",
            },
            daylightSavingsTimeZone: {
              zoneOffset: "-06:00",
              zoneAbbreviation: "MDT",
            },
            siteUsesDaylightSavingsTime: true,
          },
          geoLocation: {
            geogLocation: {
              srs: "EPSG:4326",
              latitude: 39.6324876,
              longitude: -105.014983,
            },
            localSiteXY: [],
          },
          note: [],
          siteType: [],
          siteProperty: [
            {
              value: "ST",
              name: "siteTypeCd",
            },
            {
              value: "10190002",
              name: "hucCd",
            },
            {
              value: "08",
              name: "stateCd",
            },
            {
              value: "08005",
              name: "countyCd",
            },
          ],
        },
        variable: {
          variableCode: [
            {
              value: "00060",
              network: "NWIS",
              vocabulary: "NWIS:UnitValues",
              variableID: 45807197,
              default: true,
            },
          ],
          variableName: "Streamflow, ft&#179;/s",
          variableDescription: "Discharge, cubic feet per second",
          valueType: "Derived Value",
          unit: {
            unitCode: "ft3/s",
          },
          options: {
            option: [
              {
                name: "Statistic",
                optionCode: "00000",
              },
            ],
          },
          note: [],
          noDataValue: -999999,
          variableProperty: [],
          oid: "45807197",
        },
        values: [
          {
            value: [
              {
                value: "28.9",
                qualifiers: ["P"],
                dateTime: "2023-01-10T17:15:00.000-07:00",
              },
              {
                value: "27.8",
                qualifiers: ["P"],
                dateTime: "2023-01-10T17:30:00.000-07:00",
              },
              {
                value: "27.8",
                qualifiers: ["P"],
                dateTime: "2023-01-10T17:45:00.000-07:00",
              },
              {
                value: "27.8",
                qualifiers: ["P"],
                dateTime: "2023-01-10T18:00:00.000-07:00",
              },
              {
                value: "27.8",
                qualifiers: ["P"],
                dateTime: "2023-01-10T18:15:00.000-07:00",
              },
              {
                value: "26.7",
                qualifiers: ["P"],
                dateTime: "2023-01-10T18:30:00.000-07:00",
              },
              {
                value: "27.8",
                qualifiers: ["P"],
                dateTime: "2023-01-10T18:45:00.000-07:00",
              },
              {
                value: "26.7",
                qualifiers: ["P"],
                dateTime: "2023-01-10T19:00:00.000-07:00",
              },
              {
                value: "27.8",
                qualifiers: ["P"],
                dateTime: "2023-01-10T19:15:00.000-07:00",
              },
              {
                value: "28.9",
                qualifiers: ["P"],
                dateTime: "2023-01-10T19:30:00.000-07:00",
              },
              {
                value: "28.9",
                qualifiers: ["P"],
                dateTime: "2023-01-10T19:45:00.000-07:00",
              },
              {
                value: "28.9",
                qualifiers: ["P"],
                dateTime: "2023-01-10T20:00:00.000-07:00",
              },
              {
                value: "28.9",
                qualifiers: ["P"],
                dateTime: "2023-01-10T20:15:00.000-07:00",
              },
              {
                value: "30.0",
                qualifiers: ["P"],
                dateTime: "2023-01-10T20:30:00.000-07:00",
              },
              {
                value: "30.0",
                qualifiers: ["P"],
                dateTime: "2023-01-10T20:45:00.000-07:00",
              },
              {
                value: "30.0",
                qualifiers: ["P"],
                dateTime: "2023-01-10T21:00:00.000-07:00",
              },
              {
                value: "30.0",
                qualifiers: ["P"],
                dateTime: "2023-01-10T21:15:00.000-07:00",
              },
              {
                value: "30.0",
                qualifiers: ["P"],
                dateTime: "2023-01-10T21:30:00.000-07:00",
              },
              {
                value: "30.0",
                qualifiers: ["P"],
                dateTime: "2023-01-10T21:45:00.000-07:00",
              },
              {
                value: "30.0",
                qualifiers: ["P"],
                dateTime: "2023-01-10T22:00:00.000-07:00",
              },
              {
                value: "30.0",
                qualifiers: ["P"],
                dateTime: "2023-01-10T22:15:00.000-07:00",
              },
              {
                value: "30.0",
                qualifiers: ["P"],
                dateTime: "2023-01-10T22:30:00.000-07:00",
              },
              {
                value: "30.0",
                qualifiers: ["P"],
                dateTime: "2023-01-10T22:45:00.000-07:00",
              },
              {
                value: "28.9",
                qualifiers: ["P"],
                dateTime: "2023-01-10T23:00:00.000-07:00",
              },
              {
                value: "28.9",
                qualifiers: ["P"],
                dateTime: "2023-01-10T23:15:00.000-07:00",
              },
              {
                value: "30.0",
                qualifiers: ["P"],
                dateTime: "2023-01-10T23:30:00.000-07:00",
              },
              {
                value: "28.9",
                qualifiers: ["P"],
                dateTime: "2023-01-10T23:45:00.000-07:00",
              },
              {
                value: "28.9",
                qualifiers: ["P"],
                dateTime: "2023-01-11T00:00:00.000-07:00",
              },
              {
                value: "30.0",
                qualifiers: ["P"],
                dateTime: "2023-01-11T00:15:00.000-07:00",
              },
              {
                value: "28.9",
                qualifiers: ["P"],
                dateTime: "2023-01-11T00:30:00.000-07:00",
              },
              {
                value: "28.9",
                qualifiers: ["P"],
                dateTime: "2023-01-11T00:45:00.000-07:00",
              },
              {
                value: "28.9",
                qualifiers: ["P"],
                dateTime: "2023-01-11T01:00:00.000-07:00",
              },
              {
                value: "28.9",
                qualifiers: ["P"],
                dateTime: "2023-01-11T01:15:00.000-07:00",
              },
              {
                value: "28.9",
                qualifiers: ["P"],
                dateTime: "2023-01-11T01:30:00.000-07:00",
              },
              {
                value: "28.9",
                qualifiers: ["P"],
                dateTime: "2023-01-11T01:45:00.000-07:00",
              },
              {
                value: "28.9",
                qualifiers: ["P"],
                dateTime: "2023-01-11T02:00:00.000-07:00",
              },
              {
                value: "28.9",
                qualifiers: ["P"],
                dateTime: "2023-01-11T02:15:00.000-07:00",
              },
              {
                value: "28.9",
                qualifiers: ["P"],
                dateTime: "2023-01-11T02:30:00.000-07:00",
              },
              {
                value: "28.9",
                qualifiers: ["P"],
                dateTime: "2023-01-11T02:45:00.000-07:00",
              },
              {
                value: "28.9",
                qualifiers: ["P"],
                dateTime: "2023-01-11T03:00:00.000-07:00",
              },
              {
                value: "30.0",
                qualifiers: ["P"],
                dateTime: "2023-01-11T03:15:00.000-07:00",
              },
              {
                value: "28.9",
                qualifiers: ["P"],
                dateTime: "2023-01-11T03:30:00.000-07:00",
              },
              {
                value: "28.9",
                qualifiers: ["P"],
                dateTime: "2023-01-11T03:45:00.000-07:00",
              },
              {
                value: "28.9",
                qualifiers: ["P"],
                dateTime: "2023-01-11T04:00:00.000-07:00",
              },
              {
                value: "28.9",
                qualifiers: ["P"],
                dateTime: "2023-01-11T04:15:00.000-07:00",
              },
              {
                value: "28.9",
                qualifiers: ["P"],
                dateTime: "2023-01-11T04:30:00.000-07:00",
              },
              {
                value: "28.9",
                qualifiers: ["P"],
                dateTime: "2023-01-11T04:45:00.000-07:00",
              },
              {
                value: "27.8",
                qualifiers: ["P"],
                dateTime: "2023-01-11T05:00:00.000-07:00",
              },
              {
                value: "27.8",
                qualifiers: ["P"],
                dateTime: "2023-01-11T05:15:00.000-07:00",
              },
              {
                value: "27.8",
                qualifiers: ["P"],
                dateTime: "2023-01-11T05:30:00.000-07:00",
              },
              {
                value: "26.7",
                qualifiers: ["P"],
                dateTime: "2023-01-11T05:45:00.000-07:00",
              },
              {
                value: "26.7",
                qualifiers: ["P"],
                dateTime: "2023-01-11T06:00:00.000-07:00",
              },
              {
                value: "25.7",
                qualifiers: ["P"],
                dateTime: "2023-01-11T06:15:00.000-07:00",
              },
              {
                value: "25.7",
                qualifiers: ["P"],
                dateTime: "2023-01-11T06:30:00.000-07:00",
              },
              {
                value: "25.7",
                qualifiers: ["P"],
                dateTime: "2023-01-11T06:45:00.000-07:00",
              },
              {
                value: "25.7",
                qualifiers: ["P"],
                dateTime: "2023-01-11T07:00:00.000-07:00",
              },
              {
                value: "24.6",
                qualifiers: ["P"],
                dateTime: "2023-01-11T07:15:00.000-07:00",
              },
              {
                value: "24.6",
                qualifiers: ["P"],
                dateTime: "2023-01-11T07:30:00.000-07:00",
              },
              {
                value: "24.6",
                qualifiers: ["P"],
                dateTime: "2023-01-11T07:45:00.000-07:00",
              },
              {
                value: "23.6",
                qualifiers: ["P"],
                dateTime: "2023-01-11T08:00:00.000-07:00",
              },
              {
                value: "23.6",
                qualifiers: ["P"],
                dateTime: "2023-01-11T08:15:00.000-07:00",
              },
              {
                value: "22.7",
                qualifiers: ["P"],
                dateTime: "2023-01-11T08:30:00.000-07:00",
              },
              {
                value: "22.7",
                qualifiers: ["P"],
                dateTime: "2023-01-11T08:45:00.000-07:00",
              },
              {
                value: "22.7",
                qualifiers: ["P"],
                dateTime: "2023-01-11T09:00:00.000-07:00",
              },
              {
                value: "22.7",
                qualifiers: ["P"],
                dateTime: "2023-01-11T09:15:00.000-07:00",
              },
              {
                value: "21.8",
                qualifiers: ["P"],
                dateTime: "2023-01-11T09:30:00.000-07:00",
              },
              {
                value: "21.8",
                qualifiers: ["P"],
                dateTime: "2023-01-11T09:45:00.000-07:00",
              },
              {
                value: "20.9",
                qualifiers: ["P"],
                dateTime: "2023-01-11T10:00:00.000-07:00",
              },
              {
                value: "20.9",
                qualifiers: ["P"],
                dateTime: "2023-01-11T10:15:00.000-07:00",
              },
              {
                value: "20.9",
                qualifiers: ["P"],
                dateTime: "2023-01-11T10:30:00.000-07:00",
              },
              {
                value: "20.9",
                qualifiers: ["P"],
                dateTime: "2023-01-11T10:45:00.000-07:00",
              },
              {
                value: "20.9",
                qualifiers: ["P"],
                dateTime: "2023-01-11T11:00:00.000-07:00",
              },
              {
                value: "20.9",
                qualifiers: ["P"],
                dateTime: "2023-01-11T11:15:00.000-07:00",
              },
              {
                value: "20.0",
                qualifiers: ["P"],
                dateTime: "2023-01-11T11:30:00.000-07:00",
              },
              {
                value: "20.0",
                qualifiers: ["P"],
                dateTime: "2023-01-11T11:45:00.000-07:00",
              },
              {
                value: "20.0",
                qualifiers: ["P"],
                dateTime: "2023-01-11T12:00:00.000-07:00",
              },
              {
                value: "19.1",
                qualifiers: ["P"],
                dateTime: "2023-01-11T12:15:00.000-07:00",
              },
              {
                value: "19.1",
                qualifiers: ["P"],
                dateTime: "2023-01-11T12:30:00.000-07:00",
              },
              {
                value: "19.1",
                qualifiers: ["P"],
                dateTime: "2023-01-11T12:45:00.000-07:00",
              },
              {
                value: "19.1",
                qualifiers: ["P"],
                dateTime: "2023-01-11T13:00:00.000-07:00",
              },
              {
                value: "19.1",
                qualifiers: ["P"],
                dateTime: "2023-01-11T13:15:00.000-07:00",
              },
              {
                value: "19.1",
                qualifiers: ["P"],
                dateTime: "2023-01-11T13:30:00.000-07:00",
              },
              {
                value: "19.1",
                qualifiers: ["P"],
                dateTime: "2023-01-11T13:45:00.000-07:00",
              },
              {
                value: "19.1",
                qualifiers: ["P"],
                dateTime: "2023-01-11T14:00:00.000-07:00",
              },
              {
                value: "19.1",
                qualifiers: ["P"],
                dateTime: "2023-01-11T14:15:00.000-07:00",
              },
              {
                value: "20.0",
                qualifiers: ["P"],
                dateTime: "2023-01-11T14:30:00.000-07:00",
              },
              {
                value: "20.0",
                qualifiers: ["P"],
                dateTime: "2023-01-11T14:45:00.000-07:00",
              },
              {
                value: "20.0",
                qualifiers: ["P"],
                dateTime: "2023-01-11T15:00:00.000-07:00",
              },
              {
                value: "20.9",
                qualifiers: ["P"],
                dateTime: "2023-01-11T15:15:00.000-07:00",
              },
              {
                value: "21.8",
                qualifiers: ["P"],
                dateTime: "2023-01-11T15:30:00.000-07:00",
              },
              {
                value: "21.8",
                qualifiers: ["P"],
                dateTime: "2023-01-11T15:45:00.000-07:00",
              },
              {
                value: "22.7",
                qualifiers: ["P"],
                dateTime: "2023-01-11T16:00:00.000-07:00",
              },
              {
                value: "22.7",
                qualifiers: ["P"],
                dateTime: "2023-01-11T16:15:00.000-07:00",
              },
              {
                value: "22.7",
                qualifiers: ["P"],
                dateTime: "2023-01-11T16:30:00.000-07:00",
              },
              {
                value: "22.7",
                qualifiers: ["P"],
                dateTime: "2023-01-11T16:45:00.000-07:00",
              },
              {
                value: "23.6",
                qualifiers: ["P"],
                dateTime: "2023-01-11T17:00:00.000-07:00",
              },
              {
                value: "23.6",
                qualifiers: ["P"],
                dateTime: "2023-01-11T17:15:00.000-07:00",
              },
              {
                value: "23.6",
                qualifiers: ["P"],
                dateTime: "2023-01-11T17:30:00.000-07:00",
              },
              {
                value: "23.6",
                qualifiers: ["P"],
                dateTime: "2023-01-11T17:45:00.000-07:00",
              },
              {
                value: "23.6",
                qualifiers: ["P"],
                dateTime: "2023-01-11T18:00:00.000-07:00",
              },
              {
                value: "23.6",
                qualifiers: ["P"],
                dateTime: "2023-01-11T18:15:00.000-07:00",
              },
              {
                value: "23.6",
                qualifiers: ["P"],
                dateTime: "2023-01-11T18:30:00.000-07:00",
              },
              {
                value: "23.6",
                qualifiers: ["P"],
                dateTime: "2023-01-11T18:45:00.000-07:00",
              },
              {
                value: "22.7",
                qualifiers: ["P"],
                dateTime: "2023-01-11T19:00:00.000-07:00",
              },
              {
                value: "22.7",
                qualifiers: ["P"],
                dateTime: "2023-01-11T19:15:00.000-07:00",
              },
              {
                value: "22.7",
                qualifiers: ["P"],
                dateTime: "2023-01-11T19:30:00.000-07:00",
              },
              {
                value: "22.7",
                qualifiers: ["P"],
                dateTime: "2023-01-11T19:45:00.000-07:00",
              },
              {
                value: "22.7",
                qualifiers: ["P"],
                dateTime: "2023-01-11T20:00:00.000-07:00",
              },
              {
                value: "22.7",
                qualifiers: ["P"],
                dateTime: "2023-01-11T20:15:00.000-07:00",
              },
              {
                value: "22.7",
                qualifiers: ["P"],
                dateTime: "2023-01-11T20:30:00.000-07:00",
              },
              {
                value: "21.8",
                qualifiers: ["P"],
                dateTime: "2023-01-11T20:45:00.000-07:00",
              },
              {
                value: "22.7",
                qualifiers: ["P"],
                dateTime: "2023-01-11T21:00:00.000-07:00",
              },
              {
                value: "21.8",
                qualifiers: ["P"],
                dateTime: "2023-01-11T21:15:00.000-07:00",
              },
              {
                value: "21.8",
                qualifiers: ["P"],
                dateTime: "2023-01-11T21:30:00.000-07:00",
              },
              {
                value: "21.8",
                qualifiers: ["P"],
                dateTime: "2023-01-11T21:45:00.000-07:00",
              },
              {
                value: "21.8",
                qualifiers: ["P"],
                dateTime: "2023-01-11T22:00:00.000-07:00",
              },
              {
                value: "21.8",
                qualifiers: ["P"],
                dateTime: "2023-01-11T22:15:00.000-07:00",
              },
              {
                value: "21.8",
                qualifiers: ["P"],
                dateTime: "2023-01-11T22:30:00.000-07:00",
              },
              {
                value: "21.8",
                qualifiers: ["P"],
                dateTime: "2023-01-11T22:45:00.000-07:00",
              },
              {
                value: "20.9",
                qualifiers: ["P"],
                dateTime: "2023-01-11T23:00:00.000-07:00",
              },
              {
                value: "21.8",
                qualifiers: ["P"],
                dateTime: "2023-01-11T23:15:00.000-07:00",
              },
              {
                value: "20.9",
                qualifiers: ["P"],
                dateTime: "2023-01-11T23:30:00.000-07:00",
              },
              {
                value: "21.8",
                qualifiers: ["P"],
                dateTime: "2023-01-11T23:45:00.000-07:00",
              },
              {
                value: "21.8",
                qualifiers: ["P"],
                dateTime: "2023-01-12T00:00:00.000-07:00",
              },
              {
                value: "20.9",
                qualifiers: ["P"],
                dateTime: "2023-01-12T00:15:00.000-07:00",
              },
              {
                value: "21.8",
                qualifiers: ["P"],
                dateTime: "2023-01-12T00:30:00.000-07:00",
              },
              {
                value: "20.9",
                qualifiers: ["P"],
                dateTime: "2023-01-12T00:45:00.000-07:00",
              },
              {
                value: "21.8",
                qualifiers: ["P"],
                dateTime: "2023-01-12T01:00:00.000-07:00",
              },
              {
                value: "21.8",
                qualifiers: ["P"],
                dateTime: "2023-01-12T01:15:00.000-07:00",
              },
              {
                value: "21.8",
                qualifiers: ["P"],
                dateTime: "2023-01-12T01:30:00.000-07:00",
              },
              {
                value: "21.8",
                qualifiers: ["P"],
                dateTime: "2023-01-12T01:45:00.000-07:00",
              },
              {
                value: "20.9",
                qualifiers: ["P"],
                dateTime: "2023-01-12T02:00:00.000-07:00",
              },
              {
                value: "21.8",
                qualifiers: ["P"],
                dateTime: "2023-01-12T02:15:00.000-07:00",
              },
              {
                value: "22.7",
                qualifiers: ["P"],
                dateTime: "2023-01-12T02:30:00.000-07:00",
              },
              {
                value: "21.8",
                qualifiers: ["P"],
                dateTime: "2023-01-12T02:45:00.000-07:00",
              },
              {
                value: "22.7",
                qualifiers: ["P"],
                dateTime: "2023-01-12T03:00:00.000-07:00",
              },
              {
                value: "22.7",
                qualifiers: ["P"],
                dateTime: "2023-01-12T03:15:00.000-07:00",
              },
              {
                value: "22.7",
                qualifiers: ["P"],
                dateTime: "2023-01-12T03:30:00.000-07:00",
              },
              {
                value: "22.7",
                qualifiers: ["P"],
                dateTime: "2023-01-12T03:45:00.000-07:00",
              },
              {
                value: "22.7",
                qualifiers: ["P"],
                dateTime: "2023-01-12T04:00:00.000-07:00",
              },
              {
                value: "22.7",
                qualifiers: ["P"],
                dateTime: "2023-01-12T04:15:00.000-07:00",
              },
              {
                value: "22.7",
                qualifiers: ["P"],
                dateTime: "2023-01-12T04:30:00.000-07:00",
              },
              {
                value: "22.7",
                qualifiers: ["P"],
                dateTime: "2023-01-12T04:45:00.000-07:00",
              },
              {
                value: "22.7",
                qualifiers: ["P"],
                dateTime: "2023-01-12T05:00:00.000-07:00",
              },
              {
                value: "22.7",
                qualifiers: ["P"],
                dateTime: "2023-01-12T05:15:00.000-07:00",
              },
              {
                value: "22.7",
                qualifiers: ["P"],
                dateTime: "2023-01-12T05:30:00.000-07:00",
              },
              {
                value: "21.8",
                qualifiers: ["P"],
                dateTime: "2023-01-12T05:45:00.000-07:00",
              },
              {
                value: "21.8",
                qualifiers: ["P"],
                dateTime: "2023-01-12T06:00:00.000-07:00",
              },
              {
                value: "21.8",
                qualifiers: ["P"],
                dateTime: "2023-01-12T06:15:00.000-07:00",
              },
              {
                value: "21.8",
                qualifiers: ["P"],
                dateTime: "2023-01-12T06:30:00.000-07:00",
              },
              {
                value: "21.8",
                qualifiers: ["P"],
                dateTime: "2023-01-12T06:45:00.000-07:00",
              },
              {
                value: "20.9",
                qualifiers: ["P"],
                dateTime: "2023-01-12T07:00:00.000-07:00",
              },
              {
                value: "20.9",
                qualifiers: ["P"],
                dateTime: "2023-01-12T07:15:00.000-07:00",
              },
              {
                value: "20.9",
                qualifiers: ["P"],
                dateTime: "2023-01-12T07:30:00.000-07:00",
              },
              {
                value: "20.0",
                qualifiers: ["P"],
                dateTime: "2023-01-12T07:45:00.000-07:00",
              },
              {
                value: "20.0",
                qualifiers: ["P"],
                dateTime: "2023-01-12T08:00:00.000-07:00",
              },
              {
                value: "20.0",
                qualifiers: ["P"],
                dateTime: "2023-01-12T08:15:00.000-07:00",
              },
              {
                value: "19.1",
                qualifiers: ["P"],
                dateTime: "2023-01-12T08:30:00.000-07:00",
              },
              {
                value: "19.1",
                qualifiers: ["P"],
                dateTime: "2023-01-12T08:45:00.000-07:00",
              },
              {
                value: "19.1",
                qualifiers: ["P"],
                dateTime: "2023-01-12T09:00:00.000-07:00",
              },
              {
                value: "19.1",
                qualifiers: ["P"],
                dateTime: "2023-01-12T09:15:00.000-07:00",
              },
              {
                value: "18.3",
                qualifiers: ["P"],
                dateTime: "2023-01-12T09:30:00.000-07:00",
              },
              {
                value: "18.3",
                qualifiers: ["P"],
                dateTime: "2023-01-12T09:45:00.000-07:00",
              },
              {
                value: "18.3",
                qualifiers: ["P"],
                dateTime: "2023-01-12T10:00:00.000-07:00",
              },
              {
                value: "17.5",
                qualifiers: ["P"],
                dateTime: "2023-01-12T10:15:00.000-07:00",
              },
              {
                value: "17.5",
                qualifiers: ["P"],
                dateTime: "2023-01-12T10:30:00.000-07:00",
              },
              {
                value: "16.7",
                qualifiers: ["P"],
                dateTime: "2023-01-12T10:45:00.000-07:00",
              },
              {
                value: "17.5",
                qualifiers: ["P"],
                dateTime: "2023-01-12T11:00:00.000-07:00",
              },
              {
                value: "16.7",
                qualifiers: ["P"],
                dateTime: "2023-01-12T11:15:00.000-07:00",
              },
              {
                value: "16.7",
                qualifiers: ["P"],
                dateTime: "2023-01-12T11:30:00.000-07:00",
              },
              {
                value: "16.7",
                qualifiers: ["P"],
                dateTime: "2023-01-12T11:45:00.000-07:00",
              },
              {
                value: "16.7",
                qualifiers: ["P"],
                dateTime: "2023-01-12T12:00:00.000-07:00",
              },
              {
                value: "16.0",
                qualifiers: ["P"],
                dateTime: "2023-01-12T12:15:00.000-07:00",
              },
              {
                value: "16.7",
                qualifiers: ["P"],
                dateTime: "2023-01-12T12:30:00.000-07:00",
              },
              {
                value: "16.7",
                qualifiers: ["P"],
                dateTime: "2023-01-12T12:45:00.000-07:00",
              },
              {
                value: "16.7",
                qualifiers: ["P"],
                dateTime: "2023-01-12T13:00:00.000-07:00",
              },
              {
                value: "16.0",
                qualifiers: ["P"],
                dateTime: "2023-01-12T13:15:00.000-07:00",
              },
              {
                value: "16.7",
                qualifiers: ["P"],
                dateTime: "2023-01-12T13:30:00.000-07:00",
              },
              {
                value: "16.7",
                qualifiers: ["P"],
                dateTime: "2023-01-12T13:45:00.000-07:00",
              },
              {
                value: "16.7",
                qualifiers: ["P"],
                dateTime: "2023-01-12T14:00:00.000-07:00",
              },
              {
                value: "16.7",
                qualifiers: ["P"],
                dateTime: "2023-01-12T14:15:00.000-07:00",
              },
              {
                value: "17.5",
                qualifiers: ["P"],
                dateTime: "2023-01-12T14:30:00.000-07:00",
              },
              {
                value: "17.5",
                qualifiers: ["P"],
                dateTime: "2023-01-12T14:45:00.000-07:00",
              },
              {
                value: "18.3",
                qualifiers: ["P"],
                dateTime: "2023-01-12T15:00:00.000-07:00",
              },
              {
                value: "19.1",
                qualifiers: ["P"],
                dateTime: "2023-01-12T15:15:00.000-07:00",
              },
              {
                value: "20.0",
                qualifiers: ["P"],
                dateTime: "2023-01-12T15:30:00.000-07:00",
              },
              {
                value: "20.0",
                qualifiers: ["P"],
                dateTime: "2023-01-12T15:45:00.000-07:00",
              },
              {
                value: "20.9",
                qualifiers: ["P"],
                dateTime: "2023-01-12T16:00:00.000-07:00",
              },
              {
                value: "21.8",
                qualifiers: ["P"],
                dateTime: "2023-01-12T16:15:00.000-07:00",
              },
              {
                value: "21.8",
                qualifiers: ["P"],
                dateTime: "2023-01-12T16:30:00.000-07:00",
              },
              {
                value: "22.7",
                qualifiers: ["P"],
                dateTime: "2023-01-12T16:45:00.000-07:00",
              },
              {
                value: "22.7",
                qualifiers: ["P"],
                dateTime: "2023-01-12T17:00:00.000-07:00",
              },
              {
                value: "22.7",
                qualifiers: ["P"],
                dateTime: "2023-01-12T17:15:00.000-07:00",
              },
              {
                value: "23.6",
                qualifiers: ["P"],
                dateTime: "2023-01-12T17:30:00.000-07:00",
              },
              {
                value: "22.7",
                qualifiers: ["P"],
                dateTime: "2023-01-12T17:45:00.000-07:00",
              },
              {
                value: "23.6",
                qualifiers: ["P"],
                dateTime: "2023-01-12T18:00:00.000-07:00",
              },
              {
                value: "23.6",
                qualifiers: ["P"],
                dateTime: "2023-01-12T18:15:00.000-07:00",
              },
              {
                value: "22.7",
                qualifiers: ["P"],
                dateTime: "2023-01-12T18:30:00.000-07:00",
              },
              {
                value: "22.7",
                qualifiers: ["P"],
                dateTime: "2023-01-12T18:45:00.000-07:00",
              },
              {
                value: "22.7",
                qualifiers: ["P"],
                dateTime: "2023-01-12T19:00:00.000-07:00",
              },
              {
                value: "22.7",
                qualifiers: ["P"],
                dateTime: "2023-01-12T19:15:00.000-07:00",
              },
              {
                value: "21.8",
                qualifiers: ["P"],
                dateTime: "2023-01-12T19:30:00.000-07:00",
              },
              {
                value: "21.8",
                qualifiers: ["P"],
                dateTime: "2023-01-12T19:45:00.000-07:00",
              },
              {
                value: "22.7",
                qualifiers: ["P"],
                dateTime: "2023-01-12T20:00:00.000-07:00",
              },
              {
                value: "21.8",
                qualifiers: ["P"],
                dateTime: "2023-01-12T20:15:00.000-07:00",
              },
              {
                value: "21.8",
                qualifiers: ["P"],
                dateTime: "2023-01-12T20:30:00.000-07:00",
              },
              {
                value: "21.8",
                qualifiers: ["P"],
                dateTime: "2023-01-12T20:45:00.000-07:00",
              },
              {
                value: "20.9",
                qualifiers: ["P"],
                dateTime: "2023-01-12T21:00:00.000-07:00",
              },
              {
                value: "20.9",
                qualifiers: ["P"],
                dateTime: "2023-01-12T21:15:00.000-07:00",
              },
              {
                value: "20.9",
                qualifiers: ["P"],
                dateTime: "2023-01-12T21:30:00.000-07:00",
              },
              {
                value: "20.9",
                qualifiers: ["P"],
                dateTime: "2023-01-12T21:45:00.000-07:00",
              },
              {
                value: "20.9",
                qualifiers: ["P"],
                dateTime: "2023-01-12T22:00:00.000-07:00",
              },
              {
                value: "20.0",
                qualifiers: ["P"],
                dateTime: "2023-01-12T22:15:00.000-07:00",
              },
              {
                value: "20.0",
                qualifiers: ["P"],
                dateTime: "2023-01-12T22:30:00.000-07:00",
              },
              {
                value: "20.0",
                qualifiers: ["P"],
                dateTime: "2023-01-12T22:45:00.000-07:00",
              },
              {
                value: "20.0",
                qualifiers: ["P"],
                dateTime: "2023-01-12T23:00:00.000-07:00",
              },
              {
                value: "20.0",
                qualifiers: ["P"],
                dateTime: "2023-01-12T23:15:00.000-07:00",
              },
              {
                value: "20.0",
                qualifiers: ["P"],
                dateTime: "2023-01-12T23:30:00.000-07:00",
              },
              {
                value: "20.0",
                qualifiers: ["P"],
                dateTime: "2023-01-12T23:45:00.000-07:00",
              },
              {
                value: "20.0",
                qualifiers: ["P"],
                dateTime: "2023-01-13T00:00:00.000-07:00",
              },
              {
                value: "19.1",
                qualifiers: ["P"],
                dateTime: "2023-01-13T00:15:00.000-07:00",
              },
              {
                value: "20.0",
                qualifiers: ["P"],
                dateTime: "2023-01-13T00:30:00.000-07:00",
              },
              {
                value: "20.0",
                qualifiers: ["P"],
                dateTime: "2023-01-13T00:45:00.000-07:00",
              },
              {
                value: "20.0",
                qualifiers: ["P"],
                dateTime: "2023-01-13T01:00:00.000-07:00",
              },
              {
                value: "20.0",
                qualifiers: ["P"],
                dateTime: "2023-01-13T01:15:00.000-07:00",
              },
              {
                value: "20.0",
                qualifiers: ["P"],
                dateTime: "2023-01-13T01:30:00.000-07:00",
              },
              {
                value: "20.0",
                qualifiers: ["P"],
                dateTime: "2023-01-13T01:45:00.000-07:00",
              },
              {
                value: "20.9",
                qualifiers: ["P"],
                dateTime: "2023-01-13T02:00:00.000-07:00",
              },
              {
                value: "20.9",
                qualifiers: ["P"],
                dateTime: "2023-01-13T02:15:00.000-07:00",
              },
              {
                value: "20.9",
                qualifiers: ["P"],
                dateTime: "2023-01-13T02:30:00.000-07:00",
              },
              {
                value: "21.8",
                qualifiers: ["P"],
                dateTime: "2023-01-13T02:45:00.000-07:00",
              },
              {
                value: "21.8",
                qualifiers: ["P"],
                dateTime: "2023-01-13T03:00:00.000-07:00",
              },
              {
                value: "21.8",
                qualifiers: ["P"],
                dateTime: "2023-01-13T03:15:00.000-07:00",
              },
              {
                value: "21.8",
                qualifiers: ["P"],
                dateTime: "2023-01-13T03:30:00.000-07:00",
              },
              {
                value: "21.8",
                qualifiers: ["P"],
                dateTime: "2023-01-13T03:45:00.000-07:00",
              },
              {
                value: "22.7",
                qualifiers: ["P"],
                dateTime: "2023-01-13T04:00:00.000-07:00",
              },
              {
                value: "21.8",
                qualifiers: ["P"],
                dateTime: "2023-01-13T04:15:00.000-07:00",
              },
              {
                value: "21.8",
                qualifiers: ["P"],
                dateTime: "2023-01-13T04:30:00.000-07:00",
              },
              {
                value: "21.8",
                qualifiers: ["P"],
                dateTime: "2023-01-13T04:45:00.000-07:00",
              },
              {
                value: "21.8",
                qualifiers: ["P"],
                dateTime: "2023-01-13T05:00:00.000-07:00",
              },
              {
                value: "21.8",
                qualifiers: ["P"],
                dateTime: "2023-01-13T05:15:00.000-07:00",
              },
              {
                value: "21.8",
                qualifiers: ["P"],
                dateTime: "2023-01-13T05:30:00.000-07:00",
              },
              {
                value: "21.8",
                qualifiers: ["P"],
                dateTime: "2023-01-13T05:45:00.000-07:00",
              },
              {
                value: "21.8",
                qualifiers: ["P"],
                dateTime: "2023-01-13T06:00:00.000-07:00",
              },
              {
                value: "21.8",
                qualifiers: ["P"],
                dateTime: "2023-01-13T06:15:00.000-07:00",
              },
              {
                value: "20.9",
                qualifiers: ["P"],
                dateTime: "2023-01-13T06:30:00.000-07:00",
              },
              {
                value: "20.9",
                qualifiers: ["P"],
                dateTime: "2023-01-13T06:45:00.000-07:00",
              },
              {
                value: "20.9",
                qualifiers: ["P"],
                dateTime: "2023-01-13T07:00:00.000-07:00",
              },
              {
                value: "20.0",
                qualifiers: ["P"],
                dateTime: "2023-01-13T07:15:00.000-07:00",
              },
              {
                value: "20.0",
                qualifiers: ["P"],
                dateTime: "2023-01-13T07:30:00.000-07:00",
              },
              {
                value: "20.0",
                qualifiers: ["P"],
                dateTime: "2023-01-13T07:45:00.000-07:00",
              },
              {
                value: "20.0",
                qualifiers: ["P"],
                dateTime: "2023-01-13T08:00:00.000-07:00",
              },
              {
                value: "19.1",
                qualifiers: ["P"],
                dateTime: "2023-01-13T08:15:00.000-07:00",
              },
              {
                value: "19.1",
                qualifiers: ["P"],
                dateTime: "2023-01-13T08:30:00.000-07:00",
              },
              {
                value: "19.1",
                qualifiers: ["P"],
                dateTime: "2023-01-13T08:45:00.000-07:00",
              },
              {
                value: "18.3",
                qualifiers: ["P"],
                dateTime: "2023-01-13T09:00:00.000-07:00",
              },
              {
                value: "18.3",
                qualifiers: ["P"],
                dateTime: "2023-01-13T09:15:00.000-07:00",
              },
              {
                value: "18.3",
                qualifiers: ["P"],
                dateTime: "2023-01-13T09:30:00.000-07:00",
              },
              {
                value: "17.5",
                qualifiers: ["P"],
                dateTime: "2023-01-13T09:45:00.000-07:00",
              },
              {
                value: "17.5",
                qualifiers: ["P"],
                dateTime: "2023-01-13T10:00:00.000-07:00",
              },
              {
                value: "16.7",
                qualifiers: ["P"],
                dateTime: "2023-01-13T10:15:00.000-07:00",
              },
              {
                value: "17.5",
                qualifiers: ["P"],
                dateTime: "2023-01-13T10:30:00.000-07:00",
              },
              {
                value: "16.7",
                qualifiers: ["P"],
                dateTime: "2023-01-13T10:45:00.000-07:00",
              },
              {
                value: "16.7",
                qualifiers: ["P"],
                dateTime: "2023-01-13T11:00:00.000-07:00",
              },
              {
                value: "16.7",
                qualifiers: ["P"],
                dateTime: "2023-01-13T11:15:00.000-07:00",
              },
              {
                value: "16.7",
                qualifiers: ["P"],
                dateTime: "2023-01-13T11:30:00.000-07:00",
              },
              {
                value: "16.7",
                qualifiers: ["P"],
                dateTime: "2023-01-13T11:45:00.000-07:00",
              },
              {
                value: "17.5",
                qualifiers: ["P"],
                dateTime: "2023-01-13T12:00:00.000-07:00",
              },
              {
                value: "17.5",
                qualifiers: ["P"],
                dateTime: "2023-01-13T12:15:00.000-07:00",
              },
              {
                value: "17.5",
                qualifiers: ["P"],
                dateTime: "2023-01-13T12:30:00.000-07:00",
              },
              {
                value: "17.5",
                qualifiers: ["P"],
                dateTime: "2023-01-13T12:45:00.000-07:00",
              },
              {
                value: "17.5",
                qualifiers: ["P"],
                dateTime: "2023-01-13T13:00:00.000-07:00",
              },
              {
                value: "17.5",
                qualifiers: ["P"],
                dateTime: "2023-01-13T13:15:00.000-07:00",
              },
              {
                value: "17.5",
                qualifiers: ["P"],
                dateTime: "2023-01-13T13:30:00.000-07:00",
              },
              {
                value: "17.5",
                qualifiers: ["P"],
                dateTime: "2023-01-13T13:45:00.000-07:00",
              },
              {
                value: "17.5",
                qualifiers: ["P"],
                dateTime: "2023-01-13T14:00:00.000-07:00",
              },
              {
                value: "17.5",
                qualifiers: ["P"],
                dateTime: "2023-01-13T14:15:00.000-07:00",
              },
              {
                value: "17.5",
                qualifiers: ["P"],
                dateTime: "2023-01-13T14:30:00.000-07:00",
              },
              {
                value: "18.3",
                qualifiers: ["P"],
                dateTime: "2023-01-13T14:45:00.000-07:00",
              },
              {
                value: "18.3",
                qualifiers: ["P"],
                dateTime: "2023-01-13T15:00:00.000-07:00",
              },
              {
                value: "19.1",
                qualifiers: ["P"],
                dateTime: "2023-01-13T15:15:00.000-07:00",
              },
              {
                value: "19.1",
                qualifiers: ["P"],
                dateTime: "2023-01-13T15:30:00.000-07:00",
              },
              {
                value: "20.0",
                qualifiers: ["P"],
                dateTime: "2023-01-13T15:45:00.000-07:00",
              },
              {
                value: "20.9",
                qualifiers: ["P"],
                dateTime: "2023-01-13T16:00:00.000-07:00",
              },
              {
                value: "22.7",
                qualifiers: ["P"],
                dateTime: "2023-01-13T16:15:00.000-07:00",
              },
              {
                value: "22.7",
                qualifiers: ["P"],
                dateTime: "2023-01-13T16:30:00.000-07:00",
              },
              {
                value: "23.6",
                qualifiers: ["P"],
                dateTime: "2023-01-13T16:45:00.000-07:00",
              },
              {
                value: "23.6",
                qualifiers: ["P"],
                dateTime: "2023-01-13T17:00:00.000-07:00",
              },
              {
                value: "24.6",
                qualifiers: ["P"],
                dateTime: "2023-01-13T17:15:00.000-07:00",
              },
              {
                value: "24.6",
                qualifiers: ["P"],
                dateTime: "2023-01-13T17:30:00.000-07:00",
              },
              {
                value: "24.6",
                qualifiers: ["P"],
                dateTime: "2023-01-13T17:45:00.000-07:00",
              },
              {
                value: "24.6",
                qualifiers: ["P"],
                dateTime: "2023-01-13T18:00:00.000-07:00",
              },
              {
                value: "24.6",
                qualifiers: ["P"],
                dateTime: "2023-01-13T18:15:00.000-07:00",
              },
              {
                value: "24.6",
                qualifiers: ["P"],
                dateTime: "2023-01-13T18:30:00.000-07:00",
              },
              {
                value: "24.6",
                qualifiers: ["P"],
                dateTime: "2023-01-13T18:45:00.000-07:00",
              },
              {
                value: "23.6",
                qualifiers: ["P"],
                dateTime: "2023-01-13T19:00:00.000-07:00",
              },
              {
                value: "24.6",
                qualifiers: ["P"],
                dateTime: "2023-01-13T19:15:00.000-07:00",
              },
              {
                value: "24.6",
                qualifiers: ["P"],
                dateTime: "2023-01-13T19:30:00.000-07:00",
              },
              {
                value: "23.6",
                qualifiers: ["P"],
                dateTime: "2023-01-13T19:45:00.000-07:00",
              },
              {
                value: "23.6",
                qualifiers: ["P"],
                dateTime: "2023-01-13T20:00:00.000-07:00",
              },
              {
                value: "24.6",
                qualifiers: ["P"],
                dateTime: "2023-01-13T20:15:00.000-07:00",
              },
              {
                value: "24.6",
                qualifiers: ["P"],
                dateTime: "2023-01-13T20:30:00.000-07:00",
              },
              {
                value: "24.6",
                qualifiers: ["P"],
                dateTime: "2023-01-13T20:45:00.000-07:00",
              },
              {
                value: "24.6",
                qualifiers: ["P"],
                dateTime: "2023-01-13T21:00:00.000-07:00",
              },
              {
                value: "24.6",
                qualifiers: ["P"],
                dateTime: "2023-01-13T21:15:00.000-07:00",
              },
              {
                value: "24.6",
                qualifiers: ["P"],
                dateTime: "2023-01-13T21:30:00.000-07:00",
              },
              {
                value: "23.6",
                qualifiers: ["P"],
                dateTime: "2023-01-13T21:45:00.000-07:00",
              },
              {
                value: "23.6",
                qualifiers: ["P"],
                dateTime: "2023-01-13T22:00:00.000-07:00",
              },
              {
                value: "24.6",
                qualifiers: ["P"],
                dateTime: "2023-01-13T22:15:00.000-07:00",
              },
              {
                value: "24.6",
                qualifiers: ["P"],
                dateTime: "2023-01-13T22:30:00.000-07:00",
              },
              {
                value: "23.6",
                qualifiers: ["P"],
                dateTime: "2023-01-13T22:45:00.000-07:00",
              },
              {
                value: "23.6",
                qualifiers: ["P"],
                dateTime: "2023-01-13T23:00:00.000-07:00",
              },
              {
                value: "23.6",
                qualifiers: ["P"],
                dateTime: "2023-01-13T23:15:00.000-07:00",
              },
              {
                value: "23.6",
                qualifiers: ["P"],
                dateTime: "2023-01-13T23:30:00.000-07:00",
              },
              {
                value: "24.6",
                qualifiers: ["P"],
                dateTime: "2023-01-13T23:45:00.000-07:00",
              },
              {
                value: "23.6",
                qualifiers: ["P"],
                dateTime: "2023-01-14T00:00:00.000-07:00",
              },
              {
                value: "23.6",
                qualifiers: ["P"],
                dateTime: "2023-01-14T00:15:00.000-07:00",
              },
              {
                value: "23.6",
                qualifiers: ["P"],
                dateTime: "2023-01-14T00:30:00.000-07:00",
              },
              {
                value: "23.6",
                qualifiers: ["P"],
                dateTime: "2023-01-14T00:45:00.000-07:00",
              },
              {
                value: "23.6",
                qualifiers: ["P"],
                dateTime: "2023-01-14T01:00:00.000-07:00",
              },
              {
                value: "23.6",
                qualifiers: ["P"],
                dateTime: "2023-01-14T01:15:00.000-07:00",
              },
              {
                value: "23.6",
                qualifiers: ["P"],
                dateTime: "2023-01-14T01:30:00.000-07:00",
              },
              {
                value: "23.6",
                qualifiers: ["P"],
                dateTime: "2023-01-14T01:45:00.000-07:00",
              },
              {
                value: "23.6",
                qualifiers: ["P"],
                dateTime: "2023-01-14T02:00:00.000-07:00",
              },
              {
                value: "23.6",
                qualifiers: ["P"],
                dateTime: "2023-01-14T02:15:00.000-07:00",
              },
              {
                value: "23.6",
                qualifiers: ["P"],
                dateTime: "2023-01-14T02:30:00.000-07:00",
              },
              {
                value: "23.6",
                qualifiers: ["P"],
                dateTime: "2023-01-14T02:45:00.000-07:00",
              },
              {
                value: "22.7",
                qualifiers: ["P"],
                dateTime: "2023-01-14T03:00:00.000-07:00",
              },
              {
                value: "22.7",
                qualifiers: ["P"],
                dateTime: "2023-01-14T03:15:00.000-07:00",
              },
              {
                value: "22.7",
                qualifiers: ["P"],
                dateTime: "2023-01-14T03:30:00.000-07:00",
              },
              {
                value: "22.7",
                qualifiers: ["P"],
                dateTime: "2023-01-14T03:45:00.000-07:00",
              },
              {
                value: "22.7",
                qualifiers: ["P"],
                dateTime: "2023-01-14T04:00:00.000-07:00",
              },
              {
                value: "22.7",
                qualifiers: ["P"],
                dateTime: "2023-01-14T04:15:00.000-07:00",
              },
              {
                value: "22.7",
                qualifiers: ["P"],
                dateTime: "2023-01-14T04:30:00.000-07:00",
              },
              {
                value: "22.7",
                qualifiers: ["P"],
                dateTime: "2023-01-14T04:45:00.000-07:00",
              },
              {
                value: "22.7",
                qualifiers: ["P"],
                dateTime: "2023-01-14T05:00:00.000-07:00",
              },
              {
                value: "21.8",
                qualifiers: ["P"],
                dateTime: "2023-01-14T05:15:00.000-07:00",
              },
              {
                value: "21.8",
                qualifiers: ["P"],
                dateTime: "2023-01-14T05:30:00.000-07:00",
              },
              {
                value: "21.8",
                qualifiers: ["P"],
                dateTime: "2023-01-14T05:45:00.000-07:00",
              },
              {
                value: "21.8",
                qualifiers: ["P"],
                dateTime: "2023-01-14T06:00:00.000-07:00",
              },
              {
                value: "21.8",
                qualifiers: ["P"],
                dateTime: "2023-01-14T06:15:00.000-07:00",
              },
              {
                value: "20.9",
                qualifiers: ["P"],
                dateTime: "2023-01-14T06:30:00.000-07:00",
              },
              {
                value: "20.9",
                qualifiers: ["P"],
                dateTime: "2023-01-14T06:45:00.000-07:00",
              },
              {
                value: "20.9",
                qualifiers: ["P"],
                dateTime: "2023-01-14T07:00:00.000-07:00",
              },
              {
                value: "20.9",
                qualifiers: ["P"],
                dateTime: "2023-01-14T07:15:00.000-07:00",
              },
              {
                value: "20.9",
                qualifiers: ["P"],
                dateTime: "2023-01-14T07:30:00.000-07:00",
              },
              {
                value: "20.0",
                qualifiers: ["P"],
                dateTime: "2023-01-14T07:45:00.000-07:00",
              },
              {
                value: "20.9",
                qualifiers: ["P"],
                dateTime: "2023-01-14T08:00:00.000-07:00",
              },
              {
                value: "20.9",
                qualifiers: ["P"],
                dateTime: "2023-01-14T08:15:00.000-07:00",
              },
              {
                value: "20.9",
                qualifiers: ["P"],
                dateTime: "2023-01-14T08:30:00.000-07:00",
              },
              {
                value: "20.9",
                qualifiers: ["P"],
                dateTime: "2023-01-14T08:45:00.000-07:00",
              },
              {
                value: "20.0",
                qualifiers: ["P"],
                dateTime: "2023-01-14T09:00:00.000-07:00",
              },
              {
                value: "20.0",
                qualifiers: ["P"],
                dateTime: "2023-01-14T09:15:00.000-07:00",
              },
              {
                value: "20.0",
                qualifiers: ["P"],
                dateTime: "2023-01-14T09:30:00.000-07:00",
              },
              {
                value: "20.0",
                qualifiers: ["P"],
                dateTime: "2023-01-14T09:45:00.000-07:00",
              },
              {
                value: "20.0",
                qualifiers: ["P"],
                dateTime: "2023-01-14T10:00:00.000-07:00",
              },
              {
                value: "19.1",
                qualifiers: ["P"],
                dateTime: "2023-01-14T10:15:00.000-07:00",
              },
              {
                value: "19.1",
                qualifiers: ["P"],
                dateTime: "2023-01-14T10:30:00.000-07:00",
              },
              {
                value: "19.1",
                qualifiers: ["P"],
                dateTime: "2023-01-14T10:45:00.000-07:00",
              },
              {
                value: "19.1",
                qualifiers: ["P"],
                dateTime: "2023-01-14T11:00:00.000-07:00",
              },
              {
                value: "19.1",
                qualifiers: ["P"],
                dateTime: "2023-01-14T11:15:00.000-07:00",
              },
              {
                value: "19.1",
                qualifiers: ["P"],
                dateTime: "2023-01-14T11:30:00.000-07:00",
              },
              {
                value: "19.1",
                qualifiers: ["P"],
                dateTime: "2023-01-14T11:45:00.000-07:00",
              },
              {
                value: "19.1",
                qualifiers: ["P"],
                dateTime: "2023-01-14T12:00:00.000-07:00",
              },
              {
                value: "18.3",
                qualifiers: ["P"],
                dateTime: "2023-01-14T12:15:00.000-07:00",
              },
              {
                value: "18.3",
                qualifiers: ["P"],
                dateTime: "2023-01-14T12:30:00.000-07:00",
              },
              {
                value: "18.3",
                qualifiers: ["P"],
                dateTime: "2023-01-14T12:45:00.000-07:00",
              },
              {
                value: "18.3",
                qualifiers: ["P"],
                dateTime: "2023-01-14T13:00:00.000-07:00",
              },
              {
                value: "18.3",
                qualifiers: ["P"],
                dateTime: "2023-01-14T13:15:00.000-07:00",
              },
              {
                value: "18.3",
                qualifiers: ["P"],
                dateTime: "2023-01-14T13:30:00.000-07:00",
              },
              {
                value: "18.3",
                qualifiers: ["P"],
                dateTime: "2023-01-14T13:45:00.000-07:00",
              },
              {
                value: "18.3",
                qualifiers: ["P"],
                dateTime: "2023-01-14T14:00:00.000-07:00",
              },
              {
                value: "18.3",
                qualifiers: ["P"],
                dateTime: "2023-01-14T14:15:00.000-07:00",
              },
              {
                value: "18.3",
                qualifiers: ["P"],
                dateTime: "2023-01-14T14:30:00.000-07:00",
              },
              {
                value: "18.3",
                qualifiers: ["P"],
                dateTime: "2023-01-14T14:45:00.000-07:00",
              },
              {
                value: "18.3",
                qualifiers: ["P"],
                dateTime: "2023-01-14T15:00:00.000-07:00",
              },
              {
                value: "19.1",
                qualifiers: ["P"],
                dateTime: "2023-01-14T15:15:00.000-07:00",
              },
              {
                value: "19.1",
                qualifiers: ["P"],
                dateTime: "2023-01-14T15:30:00.000-07:00",
              },
              {
                value: "20.0",
                qualifiers: ["P"],
                dateTime: "2023-01-14T15:45:00.000-07:00",
              },
              {
                value: "20.9",
                qualifiers: ["P"],
                dateTime: "2023-01-14T16:00:00.000-07:00",
              },
              {
                value: "20.9",
                qualifiers: ["P"],
                dateTime: "2023-01-14T16:15:00.000-07:00",
              },
              {
                value: "21.8",
                qualifiers: ["P"],
                dateTime: "2023-01-14T16:30:00.000-07:00",
              },
              {
                value: "21.8",
                qualifiers: ["P"],
                dateTime: "2023-01-14T16:45:00.000-07:00",
              },
              {
                value: "22.7",
                qualifiers: ["P"],
                dateTime: "2023-01-14T17:00:00.000-07:00",
              },
              {
                value: "23.6",
                qualifiers: ["P"],
                dateTime: "2023-01-14T17:15:00.000-07:00",
              },
              {
                value: "24.6",
                qualifiers: ["P"],
                dateTime: "2023-01-14T17:30:00.000-07:00",
              },
              {
                value: "25.7",
                qualifiers: ["P"],
                dateTime: "2023-01-14T17:45:00.000-07:00",
              },
              {
                value: "25.7",
                qualifiers: ["P"],
                dateTime: "2023-01-14T18:00:00.000-07:00",
              },
              {
                value: "26.7",
                qualifiers: ["P"],
                dateTime: "2023-01-14T18:15:00.000-07:00",
              },
              {
                value: "26.7",
                qualifiers: ["P"],
                dateTime: "2023-01-14T18:30:00.000-07:00",
              },
              {
                value: "27.8",
                qualifiers: ["P"],
                dateTime: "2023-01-14T18:45:00.000-07:00",
              },
              {
                value: "27.8",
                qualifiers: ["P"],
                dateTime: "2023-01-14T19:00:00.000-07:00",
              },
              {
                value: "28.9",
                qualifiers: ["P"],
                dateTime: "2023-01-14T19:15:00.000-07:00",
              },
              {
                value: "27.8",
                qualifiers: ["P"],
                dateTime: "2023-01-14T19:30:00.000-07:00",
              },
              {
                value: "28.9",
                qualifiers: ["P"],
                dateTime: "2023-01-14T19:45:00.000-07:00",
              },
              {
                value: "28.9",
                qualifiers: ["P"],
                dateTime: "2023-01-14T20:00:00.000-07:00",
              },
              {
                value: "28.9",
                qualifiers: ["P"],
                dateTime: "2023-01-14T20:15:00.000-07:00",
              },
              {
                value: "30.0",
                qualifiers: ["P"],
                dateTime: "2023-01-14T20:30:00.000-07:00",
              },
              {
                value: "30.0",
                qualifiers: ["P"],
                dateTime: "2023-01-14T20:45:00.000-07:00",
              },
              {
                value: "28.9",
                qualifiers: ["P"],
                dateTime: "2023-01-14T21:00:00.000-07:00",
              },
              {
                value: "30.0",
                qualifiers: ["P"],
                dateTime: "2023-01-14T21:15:00.000-07:00",
              },
              {
                value: "30.0",
                qualifiers: ["P"],
                dateTime: "2023-01-14T21:30:00.000-07:00",
              },
              {
                value: "28.9",
                qualifiers: ["P"],
                dateTime: "2023-01-14T21:45:00.000-07:00",
              },
              {
                value: "28.9",
                qualifiers: ["P"],
                dateTime: "2023-01-14T22:00:00.000-07:00",
              },
              {
                value: "28.9",
                qualifiers: ["P"],
                dateTime: "2023-01-14T22:15:00.000-07:00",
              },
              {
                value: "28.9",
                qualifiers: ["P"],
                dateTime: "2023-01-14T22:30:00.000-07:00",
              },
              {
                value: "28.9",
                qualifiers: ["P"],
                dateTime: "2023-01-14T22:45:00.000-07:00",
              },
              {
                value: "28.9",
                qualifiers: ["P"],
                dateTime: "2023-01-14T23:00:00.000-07:00",
              },
              {
                value: "28.9",
                qualifiers: ["P"],
                dateTime: "2023-01-14T23:15:00.000-07:00",
              },
              {
                value: "28.9",
                qualifiers: ["P"],
                dateTime: "2023-01-14T23:30:00.000-07:00",
              },
              {
                value: "28.9",
                qualifiers: ["P"],
                dateTime: "2023-01-14T23:45:00.000-07:00",
              },
              {
                value: "27.8",
                qualifiers: ["P"],
                dateTime: "2023-01-15T00:00:00.000-07:00",
              },
              {
                value: "27.8",
                qualifiers: ["P"],
                dateTime: "2023-01-15T00:15:00.000-07:00",
              },
              {
                value: "27.8",
                qualifiers: ["P"],
                dateTime: "2023-01-15T00:30:00.000-07:00",
              },
              {
                value: "27.8",
                qualifiers: ["P"],
                dateTime: "2023-01-15T00:45:00.000-07:00",
              },
              {
                value: "27.8",
                qualifiers: ["P"],
                dateTime: "2023-01-15T01:00:00.000-07:00",
              },
              {
                value: "26.7",
                qualifiers: ["P"],
                dateTime: "2023-01-15T01:15:00.000-07:00",
              },
              {
                value: "27.8",
                qualifiers: ["P"],
                dateTime: "2023-01-15T01:30:00.000-07:00",
              },
              {
                value: "27.8",
                qualifiers: ["P"],
                dateTime: "2023-01-15T01:45:00.000-07:00",
              },
              {
                value: "27.8",
                qualifiers: ["P"],
                dateTime: "2023-01-15T02:00:00.000-07:00",
              },
              {
                value: "27.8",
                qualifiers: ["P"],
                dateTime: "2023-01-15T02:15:00.000-07:00",
              },
              {
                value: "26.7",
                qualifiers: ["P"],
                dateTime: "2023-01-15T02:30:00.000-07:00",
              },
              {
                value: "26.7",
                qualifiers: ["P"],
                dateTime: "2023-01-15T02:45:00.000-07:00",
              },
              {
                value: "26.7",
                qualifiers: ["P"],
                dateTime: "2023-01-15T03:00:00.000-07:00",
              },
              {
                value: "25.7",
                qualifiers: ["P"],
                dateTime: "2023-01-15T03:15:00.000-07:00",
              },
              {
                value: "26.7",
                qualifiers: ["P"],
                dateTime: "2023-01-15T03:30:00.000-07:00",
              },
              {
                value: "25.7",
                qualifiers: ["P"],
                dateTime: "2023-01-15T03:45:00.000-07:00",
              },
              {
                value: "25.7",
                qualifiers: ["P"],
                dateTime: "2023-01-15T04:00:00.000-07:00",
              },
              {
                value: "25.7",
                qualifiers: ["P"],
                dateTime: "2023-01-15T04:15:00.000-07:00",
              },
              {
                value: "25.7",
                qualifiers: ["P"],
                dateTime: "2023-01-15T04:30:00.000-07:00",
              },
              {
                value: "25.7",
                qualifiers: ["P"],
                dateTime: "2023-01-15T04:45:00.000-07:00",
              },
              {
                value: "24.6",
                qualifiers: ["P"],
                dateTime: "2023-01-15T05:00:00.000-07:00",
              },
              {
                value: "24.6",
                qualifiers: ["P"],
                dateTime: "2023-01-15T05:15:00.000-07:00",
              },
              {
                value: "24.6",
                qualifiers: ["P"],
                dateTime: "2023-01-15T05:30:00.000-07:00",
              },
              {
                value: "24.6",
                qualifiers: ["P"],
                dateTime: "2023-01-15T05:45:00.000-07:00",
              },
              {
                value: "24.6",
                qualifiers: ["P"],
                dateTime: "2023-01-15T06:00:00.000-07:00",
              },
              {
                value: "24.6",
                qualifiers: ["P"],
                dateTime: "2023-01-15T06:15:00.000-07:00",
              },
              {
                value: "23.6",
                qualifiers: ["P"],
                dateTime: "2023-01-15T06:30:00.000-07:00",
              },
              {
                value: "23.6",
                qualifiers: ["P"],
                dateTime: "2023-01-15T06:45:00.000-07:00",
              },
              {
                value: "22.7",
                qualifiers: ["P"],
                dateTime: "2023-01-15T07:00:00.000-07:00",
              },
              {
                value: "22.7",
                qualifiers: ["P"],
                dateTime: "2023-01-15T07:15:00.000-07:00",
              },
              {
                value: "22.7",
                qualifiers: ["P"],
                dateTime: "2023-01-15T07:30:00.000-07:00",
              },
              {
                value: "21.8",
                qualifiers: ["P"],
                dateTime: "2023-01-15T07:45:00.000-07:00",
              },
              {
                value: "21.8",
                qualifiers: ["P"],
                dateTime: "2023-01-15T08:00:00.000-07:00",
              },
              {
                value: "21.8",
                qualifiers: ["P"],
                dateTime: "2023-01-15T08:15:00.000-07:00",
              },
              {
                value: "21.8",
                qualifiers: ["P"],
                dateTime: "2023-01-15T08:30:00.000-07:00",
              },
              {
                value: "21.8",
                qualifiers: ["P"],
                dateTime: "2023-01-15T08:45:00.000-07:00",
              },
              {
                value: "20.9",
                qualifiers: ["P"],
                dateTime: "2023-01-15T09:00:00.000-07:00",
              },
              {
                value: "20.9",
                qualifiers: ["P"],
                dateTime: "2023-01-15T09:15:00.000-07:00",
              },
              {
                value: "20.9",
                qualifiers: ["P"],
                dateTime: "2023-01-15T09:30:00.000-07:00",
              },
              {
                value: "20.9",
                qualifiers: ["P"],
                dateTime: "2023-01-15T09:45:00.000-07:00",
              },
              {
                value: "20.0",
                qualifiers: ["P"],
                dateTime: "2023-01-15T10:00:00.000-07:00",
              },
              {
                value: "20.0",
                qualifiers: ["P"],
                dateTime: "2023-01-15T10:15:00.000-07:00",
              },
              {
                value: "20.0",
                qualifiers: ["P"],
                dateTime: "2023-01-15T10:30:00.000-07:00",
              },
              {
                value: "20.0",
                qualifiers: ["P"],
                dateTime: "2023-01-15T10:45:00.000-07:00",
              },
              {
                value: "19.1",
                qualifiers: ["P"],
                dateTime: "2023-01-15T11:00:00.000-07:00",
              },
              {
                value: "20.0",
                qualifiers: ["P"],
                dateTime: "2023-01-15T11:15:00.000-07:00",
              },
              {
                value: "19.1",
                qualifiers: ["P"],
                dateTime: "2023-01-15T11:30:00.000-07:00",
              },
              {
                value: "19.1",
                qualifiers: ["P"],
                dateTime: "2023-01-15T11:45:00.000-07:00",
              },
              {
                value: "19.1",
                qualifiers: ["P"],
                dateTime: "2023-01-15T12:00:00.000-07:00",
              },
              {
                value: "19.1",
                qualifiers: ["P"],
                dateTime: "2023-01-15T12:15:00.000-07:00",
              },
              {
                value: "19.1",
                qualifiers: ["P"],
                dateTime: "2023-01-15T12:30:00.000-07:00",
              },
              {
                value: "18.3",
                qualifiers: ["P"],
                dateTime: "2023-01-15T12:45:00.000-07:00",
              },
              {
                value: "18.3",
                qualifiers: ["P"],
                dateTime: "2023-01-15T13:00:00.000-07:00",
              },
              {
                value: "18.3",
                qualifiers: ["P"],
                dateTime: "2023-01-15T13:15:00.000-07:00",
              },
              {
                value: "18.3",
                qualifiers: ["P"],
                dateTime: "2023-01-15T13:30:00.000-07:00",
              },
              {
                value: "18.3",
                qualifiers: ["P"],
                dateTime: "2023-01-15T13:45:00.000-07:00",
              },
              {
                value: "18.3",
                qualifiers: ["P"],
                dateTime: "2023-01-15T14:00:00.000-07:00",
              },
              {
                value: "18.3",
                qualifiers: ["P"],
                dateTime: "2023-01-15T14:15:00.000-07:00",
              },
              {
                value: "18.3",
                qualifiers: ["P"],
                dateTime: "2023-01-15T14:30:00.000-07:00",
              },
              {
                value: "18.3",
                qualifiers: ["P"],
                dateTime: "2023-01-15T14:45:00.000-07:00",
              },
              {
                value: "18.3",
                qualifiers: ["P"],
                dateTime: "2023-01-15T15:00:00.000-07:00",
              },
              {
                value: "18.3",
                qualifiers: ["P"],
                dateTime: "2023-01-15T15:15:00.000-07:00",
              },
              {
                value: "18.3",
                qualifiers: ["P"],
                dateTime: "2023-01-15T15:30:00.000-07:00",
              },
              {
                value: "18.3",
                qualifiers: ["P"],
                dateTime: "2023-01-15T15:45:00.000-07:00",
              },
              {
                value: "18.3",
                qualifiers: ["P"],
                dateTime: "2023-01-15T16:00:00.000-07:00",
              },
              {
                value: "19.1",
                qualifiers: ["P"],
                dateTime: "2023-01-15T16:15:00.000-07:00",
              },
              {
                value: "19.1",
                qualifiers: ["P"],
                dateTime: "2023-01-15T16:30:00.000-07:00",
              },
              {
                value: "20.0",
                qualifiers: ["P"],
                dateTime: "2023-01-15T16:45:00.000-07:00",
              },
              {
                value: "20.9",
                qualifiers: ["P"],
                dateTime: "2023-01-15T17:00:00.000-07:00",
              },
              {
                value: "20.9",
                qualifiers: ["P"],
                dateTime: "2023-01-15T17:15:00.000-07:00",
              },
              {
                value: "21.8",
                qualifiers: ["P"],
                dateTime: "2023-01-15T17:30:00.000-07:00",
              },
              {
                value: "21.8",
                qualifiers: ["P"],
                dateTime: "2023-01-15T17:45:00.000-07:00",
              },
              {
                value: "22.7",
                qualifiers: ["P"],
                dateTime: "2023-01-15T18:00:00.000-07:00",
              },
              {
                value: "23.6",
                qualifiers: ["P"],
                dateTime: "2023-01-15T18:15:00.000-07:00",
              },
              {
                value: "23.6",
                qualifiers: ["P"],
                dateTime: "2023-01-15T18:30:00.000-07:00",
              },
              {
                value: "23.6",
                qualifiers: ["P"],
                dateTime: "2023-01-15T18:45:00.000-07:00",
              },
              {
                value: "23.6",
                qualifiers: ["P"],
                dateTime: "2023-01-15T19:00:00.000-07:00",
              },
              {
                value: "24.6",
                qualifiers: ["P"],
                dateTime: "2023-01-15T19:15:00.000-07:00",
              },
              {
                value: "24.6",
                qualifiers: ["P"],
                dateTime: "2023-01-15T19:30:00.000-07:00",
              },
              {
                value: "24.6",
                qualifiers: ["P"],
                dateTime: "2023-01-15T19:45:00.000-07:00",
              },
              {
                value: "24.6",
                qualifiers: ["P"],
                dateTime: "2023-01-15T20:00:00.000-07:00",
              },
              {
                value: "24.6",
                qualifiers: ["P"],
                dateTime: "2023-01-15T20:15:00.000-07:00",
              },
              {
                value: "24.6",
                qualifiers: ["P"],
                dateTime: "2023-01-15T20:30:00.000-07:00",
              },
              {
                value: "24.6",
                qualifiers: ["P"],
                dateTime: "2023-01-15T20:45:00.000-07:00",
              },
              {
                value: "24.6",
                qualifiers: ["P"],
                dateTime: "2023-01-15T21:00:00.000-07:00",
              },
              {
                value: "24.6",
                qualifiers: ["P"],
                dateTime: "2023-01-15T21:15:00.000-07:00",
              },
              {
                value: "24.6",
                qualifiers: ["P"],
                dateTime: "2023-01-15T21:30:00.000-07:00",
              },
              {
                value: "24.6",
                qualifiers: ["P"],
                dateTime: "2023-01-15T21:45:00.000-07:00",
              },
              {
                value: "24.6",
                qualifiers: ["P"],
                dateTime: "2023-01-15T22:00:00.000-07:00",
              },
              {
                value: "24.6",
                qualifiers: ["P"],
                dateTime: "2023-01-15T22:15:00.000-07:00",
              },
              {
                value: "23.6",
                qualifiers: ["P"],
                dateTime: "2023-01-15T22:30:00.000-07:00",
              },
              {
                value: "23.6",
                qualifiers: ["P"],
                dateTime: "2023-01-15T22:45:00.000-07:00",
              },
              {
                value: "24.6",
                qualifiers: ["P"],
                dateTime: "2023-01-15T23:00:00.000-07:00",
              },
              {
                value: "23.6",
                qualifiers: ["P"],
                dateTime: "2023-01-15T23:15:00.000-07:00",
              },
              {
                value: "23.6",
                qualifiers: ["P"],
                dateTime: "2023-01-15T23:30:00.000-07:00",
              },
              {
                value: "23.6",
                qualifiers: ["P"],
                dateTime: "2023-01-15T23:45:00.000-07:00",
              },
              {
                value: "23.6",
                qualifiers: ["P"],
                dateTime: "2023-01-16T00:00:00.000-07:00",
              },
              {
                value: "23.6",
                qualifiers: ["P"],
                dateTime: "2023-01-16T00:15:00.000-07:00",
              },
              {
                value: "23.6",
                qualifiers: ["P"],
                dateTime: "2023-01-16T00:30:00.000-07:00",
              },
              {
                value: "23.6",
                qualifiers: ["P"],
                dateTime: "2023-01-16T00:45:00.000-07:00",
              },
              {
                value: "23.6",
                qualifiers: ["P"],
                dateTime: "2023-01-16T01:00:00.000-07:00",
              },
              {
                value: "23.6",
                qualifiers: ["P"],
                dateTime: "2023-01-16T01:15:00.000-07:00",
              },
              {
                value: "22.7",
                qualifiers: ["P"],
                dateTime: "2023-01-16T01:30:00.000-07:00",
              },
              {
                value: "22.7",
                qualifiers: ["P"],
                dateTime: "2023-01-16T01:45:00.000-07:00",
              },
              {
                value: "22.7",
                qualifiers: ["P"],
                dateTime: "2023-01-16T02:00:00.000-07:00",
              },
              {
                value: "22.7",
                qualifiers: ["P"],
                dateTime: "2023-01-16T02:15:00.000-07:00",
              },
              {
                value: "22.7",
                qualifiers: ["P"],
                dateTime: "2023-01-16T02:30:00.000-07:00",
              },
              {
                value: "22.7",
                qualifiers: ["P"],
                dateTime: "2023-01-16T02:45:00.000-07:00",
              },
              {
                value: "22.7",
                qualifiers: ["P"],
                dateTime: "2023-01-16T03:00:00.000-07:00",
              },
              {
                value: "22.7",
                qualifiers: ["P"],
                dateTime: "2023-01-16T03:15:00.000-07:00",
              },
              {
                value: "22.7",
                qualifiers: ["P"],
                dateTime: "2023-01-16T03:30:00.000-07:00",
              },
              {
                value: "23.6",
                qualifiers: ["P"],
                dateTime: "2023-01-16T03:45:00.000-07:00",
              },
              {
                value: "22.7",
                qualifiers: ["P"],
                dateTime: "2023-01-16T04:00:00.000-07:00",
              },
              {
                value: "22.7",
                qualifiers: ["P"],
                dateTime: "2023-01-16T04:15:00.000-07:00",
              },
              {
                value: "22.7",
                qualifiers: ["P"],
                dateTime: "2023-01-16T04:30:00.000-07:00",
              },
              {
                value: "22.7",
                qualifiers: ["P"],
                dateTime: "2023-01-16T04:45:00.000-07:00",
              },
              {
                value: "22.7",
                qualifiers: ["P"],
                dateTime: "2023-01-16T05:00:00.000-07:00",
              },
              {
                value: "22.7",
                qualifiers: ["P"],
                dateTime: "2023-01-16T05:15:00.000-07:00",
              },
              {
                value: "22.7",
                qualifiers: ["P"],
                dateTime: "2023-01-16T05:30:00.000-07:00",
              },
              {
                value: "22.7",
                qualifiers: ["P"],
                dateTime: "2023-01-16T05:45:00.000-07:00",
              },
              {
                value: "21.8",
                qualifiers: ["P"],
                dateTime: "2023-01-16T06:00:00.000-07:00",
              },
              {
                value: "21.8",
                qualifiers: ["P"],
                dateTime: "2023-01-16T06:15:00.000-07:00",
              },
              {
                value: "21.8",
                qualifiers: ["P"],
                dateTime: "2023-01-16T06:30:00.000-07:00",
              },
              {
                value: "20.9",
                qualifiers: ["P"],
                dateTime: "2023-01-16T06:45:00.000-07:00",
              },
              {
                value: "20.9",
                qualifiers: ["P"],
                dateTime: "2023-01-16T07:00:00.000-07:00",
              },
              {
                value: "20.0",
                qualifiers: ["P"],
                dateTime: "2023-01-16T07:15:00.000-07:00",
              },
              {
                value: "20.9",
                qualifiers: ["P"],
                dateTime: "2023-01-16T07:30:00.000-07:00",
              },
              {
                value: "20.9",
                qualifiers: ["P"],
                dateTime: "2023-01-16T07:45:00.000-07:00",
              },
              {
                value: "20.0",
                qualifiers: ["P"],
                dateTime: "2023-01-16T08:00:00.000-07:00",
              },
              {
                value: "20.0",
                qualifiers: ["P"],
                dateTime: "2023-01-16T08:15:00.000-07:00",
              },
              {
                value: "20.0",
                qualifiers: ["P"],
                dateTime: "2023-01-16T08:30:00.000-07:00",
              },
              {
                value: "19.1",
                qualifiers: ["P"],
                dateTime: "2023-01-16T08:45:00.000-07:00",
              },
              {
                value: "19.1",
                qualifiers: ["P"],
                dateTime: "2023-01-16T09:00:00.000-07:00",
              },
              {
                value: "19.1",
                qualifiers: ["P"],
                dateTime: "2023-01-16T09:15:00.000-07:00",
              },
              {
                value: "18.3",
                qualifiers: ["P"],
                dateTime: "2023-01-16T09:30:00.000-07:00",
              },
              {
                value: "18.3",
                qualifiers: ["P"],
                dateTime: "2023-01-16T09:45:00.000-07:00",
              },
              {
                value: "18.3",
                qualifiers: ["P"],
                dateTime: "2023-01-16T10:00:00.000-07:00",
              },
              {
                value: "18.3",
                qualifiers: ["P"],
                dateTime: "2023-01-16T10:15:00.000-07:00",
              },
              {
                value: "18.3",
                qualifiers: ["P"],
                dateTime: "2023-01-16T10:30:00.000-07:00",
              },
              {
                value: "18.3",
                qualifiers: ["P"],
                dateTime: "2023-01-16T10:45:00.000-07:00",
              },
              {
                value: "18.3",
                qualifiers: ["P"],
                dateTime: "2023-01-16T11:00:00.000-07:00",
              },
              {
                value: "18.3",
                qualifiers: ["P"],
                dateTime: "2023-01-16T11:15:00.000-07:00",
              },
              {
                value: "18.3",
                qualifiers: ["P"],
                dateTime: "2023-01-16T11:30:00.000-07:00",
              },
              {
                value: "18.3",
                qualifiers: ["P"],
                dateTime: "2023-01-16T11:45:00.000-07:00",
              },
              {
                value: "17.5",
                qualifiers: ["P"],
                dateTime: "2023-01-16T12:00:00.000-07:00",
              },
              {
                value: "18.3",
                qualifiers: ["P"],
                dateTime: "2023-01-16T12:15:00.000-07:00",
              },
              {
                value: "18.3",
                qualifiers: ["P"],
                dateTime: "2023-01-16T12:30:00.000-07:00",
              },
              {
                value: "18.3",
                qualifiers: ["P"],
                dateTime: "2023-01-16T12:45:00.000-07:00",
              },
              {
                value: "18.3",
                qualifiers: ["P"],
                dateTime: "2023-01-16T13:00:00.000-07:00",
              },
              {
                value: "18.3",
                qualifiers: ["P"],
                dateTime: "2023-01-16T13:15:00.000-07:00",
              },
              {
                value: "17.5",
                qualifiers: ["P"],
                dateTime: "2023-01-16T13:30:00.000-07:00",
              },
              {
                value: "17.5",
                qualifiers: ["P"],
                dateTime: "2023-01-16T13:45:00.000-07:00",
              },
              {
                value: "17.5",
                qualifiers: ["P"],
                dateTime: "2023-01-16T14:00:00.000-07:00",
              },
              {
                value: "17.5",
                qualifiers: ["P"],
                dateTime: "2023-01-16T14:15:00.000-07:00",
              },
              {
                value: "17.5",
                qualifiers: ["P"],
                dateTime: "2023-01-16T14:30:00.000-07:00",
              },
              {
                value: "17.5",
                qualifiers: ["P"],
                dateTime: "2023-01-16T14:45:00.000-07:00",
              },
              {
                value: "17.5",
                qualifiers: ["P"],
                dateTime: "2023-01-16T15:00:00.000-07:00",
              },
              {
                value: "18.3",
                qualifiers: ["P"],
                dateTime: "2023-01-16T15:15:00.000-07:00",
              },
              {
                value: "17.5",
                qualifiers: ["P"],
                dateTime: "2023-01-16T15:30:00.000-07:00",
              },
              {
                value: "18.3",
                qualifiers: ["P"],
                dateTime: "2023-01-16T15:45:00.000-07:00",
              },
              {
                value: "18.3",
                qualifiers: ["P"],
                dateTime: "2023-01-16T16:00:00.000-07:00",
              },
              {
                value: "19.1",
                qualifiers: ["P"],
                dateTime: "2023-01-16T16:15:00.000-07:00",
              },
              {
                value: "19.1",
                qualifiers: ["P"],
                dateTime: "2023-01-16T16:30:00.000-07:00",
              },
              {
                value: "20.0",
                qualifiers: ["P"],
                dateTime: "2023-01-16T16:45:00.000-07:00",
              },
              {
                value: "20.0",
                qualifiers: ["P"],
                dateTime: "2023-01-16T17:00:00.000-07:00",
              },
              {
                value: "20.9",
                qualifiers: ["P"],
                dateTime: "2023-01-16T17:15:00.000-07:00",
              },
              {
                value: "21.8",
                qualifiers: ["P"],
                dateTime: "2023-01-16T17:30:00.000-07:00",
              },
              {
                value: "21.8",
                qualifiers: ["P"],
                dateTime: "2023-01-16T17:45:00.000-07:00",
              },
              {
                value: "22.7",
                qualifiers: ["P"],
                dateTime: "2023-01-16T18:00:00.000-07:00",
              },
              {
                value: "22.7",
                qualifiers: ["P"],
                dateTime: "2023-01-16T18:15:00.000-07:00",
              },
              {
                value: "23.6",
                qualifiers: ["P"],
                dateTime: "2023-01-16T18:30:00.000-07:00",
              },
              {
                value: "22.7",
                qualifiers: ["P"],
                dateTime: "2023-01-16T18:45:00.000-07:00",
              },
              {
                value: "23.6",
                qualifiers: ["P"],
                dateTime: "2023-01-16T19:00:00.000-07:00",
              },
              {
                value: "23.6",
                qualifiers: ["P"],
                dateTime: "2023-01-16T19:15:00.000-07:00",
              },
              {
                value: "23.6",
                qualifiers: ["P"],
                dateTime: "2023-01-16T19:30:00.000-07:00",
              },
              {
                value: "23.6",
                qualifiers: ["P"],
                dateTime: "2023-01-16T19:45:00.000-07:00",
              },
              {
                value: "23.6",
                qualifiers: ["P"],
                dateTime: "2023-01-16T20:00:00.000-07:00",
              },
              {
                value: "23.6",
                qualifiers: ["P"],
                dateTime: "2023-01-16T20:15:00.000-07:00",
              },
              {
                value: "23.6",
                qualifiers: ["P"],
                dateTime: "2023-01-16T20:30:00.000-07:00",
              },
              {
                value: "23.6",
                qualifiers: ["P"],
                dateTime: "2023-01-16T20:45:00.000-07:00",
              },
              {
                value: "23.6",
                qualifiers: ["P"],
                dateTime: "2023-01-16T21:00:00.000-07:00",
              },
              {
                value: "23.6",
                qualifiers: ["P"],
                dateTime: "2023-01-16T21:15:00.000-07:00",
              },
              {
                value: "22.7",
                qualifiers: ["P"],
                dateTime: "2023-01-16T21:30:00.000-07:00",
              },
              {
                value: "22.7",
                qualifiers: ["P"],
                dateTime: "2023-01-16T21:45:00.000-07:00",
              },
              {
                value: "22.7",
                qualifiers: ["P"],
                dateTime: "2023-01-16T22:00:00.000-07:00",
              },
              {
                value: "22.7",
                qualifiers: ["P"],
                dateTime: "2023-01-16T22:15:00.000-07:00",
              },
              {
                value: "22.7",
                qualifiers: ["P"],
                dateTime: "2023-01-16T22:30:00.000-07:00",
              },
              {
                value: "22.7",
                qualifiers: ["P"],
                dateTime: "2023-01-16T22:45:00.000-07:00",
              },
              {
                value: "22.7",
                qualifiers: ["P"],
                dateTime: "2023-01-16T23:00:00.000-07:00",
              },
              {
                value: "21.8",
                qualifiers: ["P"],
                dateTime: "2023-01-16T23:15:00.000-07:00",
              },
              {
                value: "21.8",
                qualifiers: ["P"],
                dateTime: "2023-01-16T23:30:00.000-07:00",
              },
              {
                value: "21.8",
                qualifiers: ["P"],
                dateTime: "2023-01-16T23:45:00.000-07:00",
              },
              {
                value: "22.7",
                qualifiers: ["P"],
                dateTime: "2023-01-17T00:00:00.000-07:00",
              },
              {
                value: "22.7",
                qualifiers: ["P"],
                dateTime: "2023-01-17T00:15:00.000-07:00",
              },
              {
                value: "22.7",
                qualifiers: ["P"],
                dateTime: "2023-01-17T00:30:00.000-07:00",
              },
              {
                value: "22.7",
                qualifiers: ["P"],
                dateTime: "2023-01-17T00:45:00.000-07:00",
              },
              {
                value: "22.7",
                qualifiers: ["P"],
                dateTime: "2023-01-17T01:00:00.000-07:00",
              },
              {
                value: "22.7",
                qualifiers: ["P"],
                dateTime: "2023-01-17T01:15:00.000-07:00",
              },
              {
                value: "22.7",
                qualifiers: ["P"],
                dateTime: "2023-01-17T01:30:00.000-07:00",
              },
              {
                value: "22.7",
                qualifiers: ["P"],
                dateTime: "2023-01-17T01:45:00.000-07:00",
              },
              {
                value: "22.7",
                qualifiers: ["P"],
                dateTime: "2023-01-17T02:00:00.000-07:00",
              },
              {
                value: "22.7",
                qualifiers: ["P"],
                dateTime: "2023-01-17T02:15:00.000-07:00",
              },
              {
                value: "22.7",
                qualifiers: ["P"],
                dateTime: "2023-01-17T02:30:00.000-07:00",
              },
              {
                value: "22.7",
                qualifiers: ["P"],
                dateTime: "2023-01-17T02:45:00.000-07:00",
              },
              {
                value: "22.7",
                qualifiers: ["P"],
                dateTime: "2023-01-17T03:00:00.000-07:00",
              },
              {
                value: "22.7",
                qualifiers: ["P"],
                dateTime: "2023-01-17T03:15:00.000-07:00",
              },
              {
                value: "22.7",
                qualifiers: ["P"],
                dateTime: "2023-01-17T03:30:00.000-07:00",
              },
              {
                value: "22.7",
                qualifiers: ["P"],
                dateTime: "2023-01-17T03:45:00.000-07:00",
              },
              {
                value: "22.7",
                qualifiers: ["P"],
                dateTime: "2023-01-17T04:00:00.000-07:00",
              },
              {
                value: "22.7",
                qualifiers: ["P"],
                dateTime: "2023-01-17T04:15:00.000-07:00",
              },
              {
                value: "21.8",
                qualifiers: ["P"],
                dateTime: "2023-01-17T04:30:00.000-07:00",
              },
              {
                value: "22.7",
                qualifiers: ["P"],
                dateTime: "2023-01-17T04:45:00.000-07:00",
              },
              {
                value: "22.7",
                qualifiers: ["P"],
                dateTime: "2023-01-17T05:00:00.000-07:00",
              },
              {
                value: "22.7",
                qualifiers: ["P"],
                dateTime: "2023-01-17T05:15:00.000-07:00",
              },
              {
                value: "21.8",
                qualifiers: ["P"],
                dateTime: "2023-01-17T05:30:00.000-07:00",
              },
              {
                value: "21.8",
                qualifiers: ["P"],
                dateTime: "2023-01-17T05:45:00.000-07:00",
              },
              {
                value: "21.8",
                qualifiers: ["P"],
                dateTime: "2023-01-17T06:00:00.000-07:00",
              },
              {
                value: "20.9",
                qualifiers: ["P"],
                dateTime: "2023-01-17T06:15:00.000-07:00",
              },
              {
                value: "21.8",
                qualifiers: ["P"],
                dateTime: "2023-01-17T06:30:00.000-07:00",
              },
              {
                value: "20.9",
                qualifiers: ["P"],
                dateTime: "2023-01-17T06:45:00.000-07:00",
              },
              {
                value: "20.9",
                qualifiers: ["P"],
                dateTime: "2023-01-17T07:00:00.000-07:00",
              },
              {
                value: "20.9",
                qualifiers: ["P"],
                dateTime: "2023-01-17T07:15:00.000-07:00",
              },
              {
                value: "20.0",
                qualifiers: ["P"],
                dateTime: "2023-01-17T07:30:00.000-07:00",
              },
              {
                value: "20.0",
                qualifiers: ["P"],
                dateTime: "2023-01-17T07:45:00.000-07:00",
              },
              {
                value: "20.0",
                qualifiers: ["P"],
                dateTime: "2023-01-17T08:00:00.000-07:00",
              },
              {
                value: "20.0",
                qualifiers: ["P"],
                dateTime: "2023-01-17T08:15:00.000-07:00",
              },
              {
                value: "19.1",
                qualifiers: ["P"],
                dateTime: "2023-01-17T08:30:00.000-07:00",
              },
              {
                value: "20.0",
                qualifiers: ["P"],
                dateTime: "2023-01-17T08:45:00.000-07:00",
              },
              {
                value: "19.1",
                qualifiers: ["P"],
                dateTime: "2023-01-17T09:00:00.000-07:00",
              },
              {
                value: "19.1",
                qualifiers: ["P"],
                dateTime: "2023-01-17T09:15:00.000-07:00",
              },
              {
                value: "19.1",
                qualifiers: ["P"],
                dateTime: "2023-01-17T09:30:00.000-07:00",
              },
              {
                value: "18.3",
                qualifiers: ["P"],
                dateTime: "2023-01-17T09:45:00.000-07:00",
              },
              {
                value: "18.3",
                qualifiers: ["P"],
                dateTime: "2023-01-17T10:00:00.000-07:00",
              },
              {
                value: "18.3",
                qualifiers: ["P"],
                dateTime: "2023-01-17T10:15:00.000-07:00",
              },
              {
                value: "18.3",
                qualifiers: ["P"],
                dateTime: "2023-01-17T10:30:00.000-07:00",
              },
              {
                value: "18.3",
                qualifiers: ["P"],
                dateTime: "2023-01-17T10:45:00.000-07:00",
              },
              {
                value: "17.5",
                qualifiers: ["P"],
                dateTime: "2023-01-17T11:00:00.000-07:00",
              },
              {
                value: "17.5",
                qualifiers: ["P"],
                dateTime: "2023-01-17T11:15:00.000-07:00",
              },
              {
                value: "17.5",
                qualifiers: ["P"],
                dateTime: "2023-01-17T11:30:00.000-07:00",
              },
              {
                value: "17.5",
                qualifiers: ["P"],
                dateTime: "2023-01-17T11:45:00.000-07:00",
              },
              {
                value: "17.5",
                qualifiers: ["P"],
                dateTime: "2023-01-17T12:00:00.000-07:00",
              },
              {
                value: "17.5",
                qualifiers: ["P"],
                dateTime: "2023-01-17T12:15:00.000-07:00",
              },
              {
                value: "17.5",
                qualifiers: ["P"],
                dateTime: "2023-01-17T12:30:00.000-07:00",
              },
              {
                value: "17.5",
                qualifiers: ["P"],
                dateTime: "2023-01-17T12:45:00.000-07:00",
              },
              {
                value: "17.5",
                qualifiers: ["P"],
                dateTime: "2023-01-17T13:00:00.000-07:00",
              },
              {
                value: "17.5",
                qualifiers: ["P"],
                dateTime: "2023-01-17T13:15:00.000-07:00",
              },
              {
                value: "16.7",
                qualifiers: ["P"],
                dateTime: "2023-01-17T13:30:00.000-07:00",
              },
              {
                value: "16.7",
                qualifiers: ["P"],
                dateTime: "2023-01-17T13:45:00.000-07:00",
              },
              {
                value: "16.7",
                qualifiers: ["P"],
                dateTime: "2023-01-17T14:00:00.000-07:00",
              },
              {
                value: "16.7",
                qualifiers: ["P"],
                dateTime: "2023-01-17T14:15:00.000-07:00",
              },
              {
                value: "16.7",
                qualifiers: ["P"],
                dateTime: "2023-01-17T14:30:00.000-07:00",
              },
              {
                value: "16.7",
                qualifiers: ["P"],
                dateTime: "2023-01-17T14:45:00.000-07:00",
              },
              {
                value: "16.7",
                qualifiers: ["P"],
                dateTime: "2023-01-17T15:00:00.000-07:00",
              },
              {
                value: "17.5",
                qualifiers: ["P"],
                dateTime: "2023-01-17T15:15:00.000-07:00",
              },
              {
                value: "18.3",
                qualifiers: ["P"],
                dateTime: "2023-01-17T15:30:00.000-07:00",
              },
              {
                value: "18.3",
                qualifiers: ["P"],
                dateTime: "2023-01-17T15:45:00.000-07:00",
              },
              {
                value: "19.1",
                qualifiers: ["P"],
                dateTime: "2023-01-17T16:00:00.000-07:00",
              },
              {
                value: "19.1",
                qualifiers: ["P"],
                dateTime: "2023-01-17T16:15:00.000-07:00",
              },
              {
                value: "20.0",
                qualifiers: ["P"],
                dateTime: "2023-01-17T16:30:00.000-07:00",
              },
              {
                value: "20.0",
                qualifiers: ["P"],
                dateTime: "2023-01-17T16:45:00.000-07:00",
              },
            ],
            qualifier: [
              {
                qualifierCode: "P",
                qualifierDescription: "Provisional data subject to revision.",
                qualifierID: 0,
                network: "NWIS",
                vocabulary: "uv_rmk_cd",
              },
            ],
            qualityControlLevel: [],
            method: [
              {
                methodDescription: "",
                methodID: 210901,
              },
            ],
            source: [],
            offset: [],
            sample: [],
            censorCode: [],
          },
        ],
        name: "USGS:06710247:00060:00000",
      },
      {
        sourceInfo: {
          siteName: "SOUTH PLATTE RIVER BELOW UNION AVE, AT ENGLEWOOD,C",
          siteCode: [
            {
              value: "06710247",
              network: "NWIS",
              agencyCode: "USGS",
            },
          ],
          timeZoneInfo: {
            defaultTimeZone: {
              zoneOffset: "-07:00",
              zoneAbbreviation: "MST",
            },
            daylightSavingsTimeZone: {
              zoneOffset: "-06:00",
              zoneAbbreviation: "MDT",
            },
            siteUsesDaylightSavingsTime: true,
          },
          geoLocation: {
            geogLocation: {
              srs: "EPSG:4326",
              latitude: 39.6324876,
              longitude: -105.014983,
            },
            localSiteXY: [],
          },
          note: [],
          siteType: [],
          siteProperty: [
            {
              value: "ST",
              name: "siteTypeCd",
            },
            {
              value: "10190002",
              name: "hucCd",
            },
            {
              value: "08",
              name: "stateCd",
            },
            {
              value: "08005",
              name: "countyCd",
            },
          ],
        },
        variable: {
          variableCode: [
            {
              value: "00065",
              network: "NWIS",
              vocabulary: "NWIS:UnitValues",
              variableID: 45807202,
              default: true,
            },
          ],
          variableName: "Gage height, ft",
          variableDescription: "Gage height, feet",
          valueType: "Derived Value",
          unit: {
            unitCode: "ft",
          },
          options: {
            option: [
              {
                name: "Statistic",
                optionCode: "00000",
              },
            ],
          },
          note: [],
          noDataValue: -999999,
          variableProperty: [],
          oid: "45807202",
        },
        values: [
          {
            value: [
              {
                value: "10.89",
                qualifiers: ["P"],
                dateTime: "2023-01-10T17:15:00.000-07:00",
              },
              {
                value: "10.88",
                qualifiers: ["P"],
                dateTime: "2023-01-10T17:30:00.000-07:00",
              },
              {
                value: "10.88",
                qualifiers: ["P"],
                dateTime: "2023-01-10T17:45:00.000-07:00",
              },
              {
                value: "10.88",
                qualifiers: ["P"],
                dateTime: "2023-01-10T18:00:00.000-07:00",
              },
              {
                value: "10.88",
                qualifiers: ["P"],
                dateTime: "2023-01-10T18:15:00.000-07:00",
              },
              {
                value: "10.87",
                qualifiers: ["P"],
                dateTime: "2023-01-10T18:30:00.000-07:00",
              },
              {
                value: "10.88",
                qualifiers: ["P"],
                dateTime: "2023-01-10T18:45:00.000-07:00",
              },
              {
                value: "10.87",
                qualifiers: ["P"],
                dateTime: "2023-01-10T19:00:00.000-07:00",
              },
              {
                value: "10.88",
                qualifiers: ["P"],
                dateTime: "2023-01-10T19:15:00.000-07:00",
              },
              {
                value: "10.89",
                qualifiers: ["P"],
                dateTime: "2023-01-10T19:30:00.000-07:00",
              },
              {
                value: "10.89",
                qualifiers: ["P"],
                dateTime: "2023-01-10T19:45:00.000-07:00",
              },
              {
                value: "10.89",
                qualifiers: ["P"],
                dateTime: "2023-01-10T20:00:00.000-07:00",
              },
              {
                value: "10.89",
                qualifiers: ["P"],
                dateTime: "2023-01-10T20:15:00.000-07:00",
              },
              {
                value: "10.90",
                qualifiers: ["P"],
                dateTime: "2023-01-10T20:30:00.000-07:00",
              },
              {
                value: "10.90",
                qualifiers: ["P"],
                dateTime: "2023-01-10T20:45:00.000-07:00",
              },
              {
                value: "10.90",
                qualifiers: ["P"],
                dateTime: "2023-01-10T21:00:00.000-07:00",
              },
              {
                value: "10.90",
                qualifiers: ["P"],
                dateTime: "2023-01-10T21:15:00.000-07:00",
              },
              {
                value: "10.90",
                qualifiers: ["P"],
                dateTime: "2023-01-10T21:30:00.000-07:00",
              },
              {
                value: "10.90",
                qualifiers: ["P"],
                dateTime: "2023-01-10T21:45:00.000-07:00",
              },
              {
                value: "10.90",
                qualifiers: ["P"],
                dateTime: "2023-01-10T22:00:00.000-07:00",
              },
              {
                value: "10.90",
                qualifiers: ["P"],
                dateTime: "2023-01-10T22:15:00.000-07:00",
              },
              {
                value: "10.90",
                qualifiers: ["P"],
                dateTime: "2023-01-10T22:30:00.000-07:00",
              },
              {
                value: "10.90",
                qualifiers: ["P"],
                dateTime: "2023-01-10T22:45:00.000-07:00",
              },
              {
                value: "10.89",
                qualifiers: ["P"],
                dateTime: "2023-01-10T23:00:00.000-07:00",
              },
              {
                value: "10.89",
                qualifiers: ["P"],
                dateTime: "2023-01-10T23:15:00.000-07:00",
              },
              {
                value: "10.90",
                qualifiers: ["P"],
                dateTime: "2023-01-10T23:30:00.000-07:00",
              },
              {
                value: "10.89",
                qualifiers: ["P"],
                dateTime: "2023-01-10T23:45:00.000-07:00",
              },
              {
                value: "10.89",
                qualifiers: ["P"],
                dateTime: "2023-01-11T00:00:00.000-07:00",
              },
              {
                value: "10.90",
                qualifiers: ["P"],
                dateTime: "2023-01-11T00:15:00.000-07:00",
              },
              {
                value: "10.89",
                qualifiers: ["P"],
                dateTime: "2023-01-11T00:30:00.000-07:00",
              },
              {
                value: "10.89",
                qualifiers: ["P"],
                dateTime: "2023-01-11T00:45:00.000-07:00",
              },
              {
                value: "10.89",
                qualifiers: ["P"],
                dateTime: "2023-01-11T01:00:00.000-07:00",
              },
              {
                value: "10.89",
                qualifiers: ["P"],
                dateTime: "2023-01-11T01:15:00.000-07:00",
              },
              {
                value: "10.89",
                qualifiers: ["P"],
                dateTime: "2023-01-11T01:30:00.000-07:00",
              },
              {
                value: "10.89",
                qualifiers: ["P"],
                dateTime: "2023-01-11T01:45:00.000-07:00",
              },
              {
                value: "10.89",
                qualifiers: ["P"],
                dateTime: "2023-01-11T02:00:00.000-07:00",
              },
              {
                value: "10.89",
                qualifiers: ["P"],
                dateTime: "2023-01-11T02:15:00.000-07:00",
              },
              {
                value: "10.89",
                qualifiers: ["P"],
                dateTime: "2023-01-11T02:30:00.000-07:00",
              },
              {
                value: "10.89",
                qualifiers: ["P"],
                dateTime: "2023-01-11T02:45:00.000-07:00",
              },
              {
                value: "10.89",
                qualifiers: ["P"],
                dateTime: "2023-01-11T03:00:00.000-07:00",
              },
              {
                value: "10.90",
                qualifiers: ["P"],
                dateTime: "2023-01-11T03:15:00.000-07:00",
              },
              {
                value: "10.89",
                qualifiers: ["P"],
                dateTime: "2023-01-11T03:30:00.000-07:00",
              },
              {
                value: "10.89",
                qualifiers: ["P"],
                dateTime: "2023-01-11T03:45:00.000-07:00",
              },
              {
                value: "10.89",
                qualifiers: ["P"],
                dateTime: "2023-01-11T04:00:00.000-07:00",
              },
              {
                value: "10.89",
                qualifiers: ["P"],
                dateTime: "2023-01-11T04:15:00.000-07:00",
              },
              {
                value: "10.89",
                qualifiers: ["P"],
                dateTime: "2023-01-11T04:30:00.000-07:00",
              },
              {
                value: "10.89",
                qualifiers: ["P"],
                dateTime: "2023-01-11T04:45:00.000-07:00",
              },
              {
                value: "10.88",
                qualifiers: ["P"],
                dateTime: "2023-01-11T05:00:00.000-07:00",
              },
              {
                value: "10.88",
                qualifiers: ["P"],
                dateTime: "2023-01-11T05:15:00.000-07:00",
              },
              {
                value: "10.88",
                qualifiers: ["P"],
                dateTime: "2023-01-11T05:30:00.000-07:00",
              },
              {
                value: "10.87",
                qualifiers: ["P"],
                dateTime: "2023-01-11T05:45:00.000-07:00",
              },
              {
                value: "10.87",
                qualifiers: ["P"],
                dateTime: "2023-01-11T06:00:00.000-07:00",
              },
              {
                value: "10.86",
                qualifiers: ["P"],
                dateTime: "2023-01-11T06:15:00.000-07:00",
              },
              {
                value: "10.86",
                qualifiers: ["P"],
                dateTime: "2023-01-11T06:30:00.000-07:00",
              },
              {
                value: "10.86",
                qualifiers: ["P"],
                dateTime: "2023-01-11T06:45:00.000-07:00",
              },
              {
                value: "10.86",
                qualifiers: ["P"],
                dateTime: "2023-01-11T07:00:00.000-07:00",
              },
              {
                value: "10.85",
                qualifiers: ["P"],
                dateTime: "2023-01-11T07:15:00.000-07:00",
              },
              {
                value: "10.85",
                qualifiers: ["P"],
                dateTime: "2023-01-11T07:30:00.000-07:00",
              },
              {
                value: "10.85",
                qualifiers: ["P"],
                dateTime: "2023-01-11T07:45:00.000-07:00",
              },
              {
                value: "10.84",
                qualifiers: ["P"],
                dateTime: "2023-01-11T08:00:00.000-07:00",
              },
              {
                value: "10.84",
                qualifiers: ["P"],
                dateTime: "2023-01-11T08:15:00.000-07:00",
              },
              {
                value: "10.83",
                qualifiers: ["P"],
                dateTime: "2023-01-11T08:30:00.000-07:00",
              },
              {
                value: "10.83",
                qualifiers: ["P"],
                dateTime: "2023-01-11T08:45:00.000-07:00",
              },
              {
                value: "10.83",
                qualifiers: ["P"],
                dateTime: "2023-01-11T09:00:00.000-07:00",
              },
              {
                value: "10.83",
                qualifiers: ["P"],
                dateTime: "2023-01-11T09:15:00.000-07:00",
              },
              {
                value: "10.82",
                qualifiers: ["P"],
                dateTime: "2023-01-11T09:30:00.000-07:00",
              },
              {
                value: "10.82",
                qualifiers: ["P"],
                dateTime: "2023-01-11T09:45:00.000-07:00",
              },
              {
                value: "10.81",
                qualifiers: ["P"],
                dateTime: "2023-01-11T10:00:00.000-07:00",
              },
              {
                value: "10.81",
                qualifiers: ["P"],
                dateTime: "2023-01-11T10:15:00.000-07:00",
              },
              {
                value: "10.81",
                qualifiers: ["P"],
                dateTime: "2023-01-11T10:30:00.000-07:00",
              },
              {
                value: "10.81",
                qualifiers: ["P"],
                dateTime: "2023-01-11T10:45:00.000-07:00",
              },
              {
                value: "10.81",
                qualifiers: ["P"],
                dateTime: "2023-01-11T11:00:00.000-07:00",
              },
              {
                value: "10.81",
                qualifiers: ["P"],
                dateTime: "2023-01-11T11:15:00.000-07:00",
              },
              {
                value: "10.80",
                qualifiers: ["P"],
                dateTime: "2023-01-11T11:30:00.000-07:00",
              },
              {
                value: "10.80",
                qualifiers: ["P"],
                dateTime: "2023-01-11T11:45:00.000-07:00",
              },
              {
                value: "10.80",
                qualifiers: ["P"],
                dateTime: "2023-01-11T12:00:00.000-07:00",
              },
              {
                value: "10.79",
                qualifiers: ["P"],
                dateTime: "2023-01-11T12:15:00.000-07:00",
              },
              {
                value: "10.79",
                qualifiers: ["P"],
                dateTime: "2023-01-11T12:30:00.000-07:00",
              },
              {
                value: "10.79",
                qualifiers: ["P"],
                dateTime: "2023-01-11T12:45:00.000-07:00",
              },
              {
                value: "10.79",
                qualifiers: ["P"],
                dateTime: "2023-01-11T13:00:00.000-07:00",
              },
              {
                value: "10.79",
                qualifiers: ["P"],
                dateTime: "2023-01-11T13:15:00.000-07:00",
              },
              {
                value: "10.79",
                qualifiers: ["P"],
                dateTime: "2023-01-11T13:30:00.000-07:00",
              },
              {
                value: "10.79",
                qualifiers: ["P"],
                dateTime: "2023-01-11T13:45:00.000-07:00",
              },
              {
                value: "10.79",
                qualifiers: ["P"],
                dateTime: "2023-01-11T14:00:00.000-07:00",
              },
              {
                value: "10.79",
                qualifiers: ["P"],
                dateTime: "2023-01-11T14:15:00.000-07:00",
              },
              {
                value: "10.80",
                qualifiers: ["P"],
                dateTime: "2023-01-11T14:30:00.000-07:00",
              },
              {
                value: "10.80",
                qualifiers: ["P"],
                dateTime: "2023-01-11T14:45:00.000-07:00",
              },
              {
                value: "10.80",
                qualifiers: ["P"],
                dateTime: "2023-01-11T15:00:00.000-07:00",
              },
              {
                value: "10.81",
                qualifiers: ["P"],
                dateTime: "2023-01-11T15:15:00.000-07:00",
              },
              {
                value: "10.82",
                qualifiers: ["P"],
                dateTime: "2023-01-11T15:30:00.000-07:00",
              },
              {
                value: "10.82",
                qualifiers: ["P"],
                dateTime: "2023-01-11T15:45:00.000-07:00",
              },
              {
                value: "10.83",
                qualifiers: ["P"],
                dateTime: "2023-01-11T16:00:00.000-07:00",
              },
              {
                value: "10.83",
                qualifiers: ["P"],
                dateTime: "2023-01-11T16:15:00.000-07:00",
              },
              {
                value: "10.83",
                qualifiers: ["P"],
                dateTime: "2023-01-11T16:30:00.000-07:00",
              },
              {
                value: "10.83",
                qualifiers: ["P"],
                dateTime: "2023-01-11T16:45:00.000-07:00",
              },
              {
                value: "10.84",
                qualifiers: ["P"],
                dateTime: "2023-01-11T17:00:00.000-07:00",
              },
              {
                value: "10.84",
                qualifiers: ["P"],
                dateTime: "2023-01-11T17:15:00.000-07:00",
              },
              {
                value: "10.84",
                qualifiers: ["P"],
                dateTime: "2023-01-11T17:30:00.000-07:00",
              },
              {
                value: "10.84",
                qualifiers: ["P"],
                dateTime: "2023-01-11T17:45:00.000-07:00",
              },
              {
                value: "10.84",
                qualifiers: ["P"],
                dateTime: "2023-01-11T18:00:00.000-07:00",
              },
              {
                value: "10.84",
                qualifiers: ["P"],
                dateTime: "2023-01-11T18:15:00.000-07:00",
              },
              {
                value: "10.84",
                qualifiers: ["P"],
                dateTime: "2023-01-11T18:30:00.000-07:00",
              },
              {
                value: "10.84",
                qualifiers: ["P"],
                dateTime: "2023-01-11T18:45:00.000-07:00",
              },
              {
                value: "10.83",
                qualifiers: ["P"],
                dateTime: "2023-01-11T19:00:00.000-07:00",
              },
              {
                value: "10.83",
                qualifiers: ["P"],
                dateTime: "2023-01-11T19:15:00.000-07:00",
              },
              {
                value: "10.83",
                qualifiers: ["P"],
                dateTime: "2023-01-11T19:30:00.000-07:00",
              },
              {
                value: "10.83",
                qualifiers: ["P"],
                dateTime: "2023-01-11T19:45:00.000-07:00",
              },
              {
                value: "10.83",
                qualifiers: ["P"],
                dateTime: "2023-01-11T20:00:00.000-07:00",
              },
              {
                value: "10.83",
                qualifiers: ["P"],
                dateTime: "2023-01-11T20:15:00.000-07:00",
              },
              {
                value: "10.83",
                qualifiers: ["P"],
                dateTime: "2023-01-11T20:30:00.000-07:00",
              },
              {
                value: "10.82",
                qualifiers: ["P"],
                dateTime: "2023-01-11T20:45:00.000-07:00",
              },
              {
                value: "10.83",
                qualifiers: ["P"],
                dateTime: "2023-01-11T21:00:00.000-07:00",
              },
              {
                value: "10.82",
                qualifiers: ["P"],
                dateTime: "2023-01-11T21:15:00.000-07:00",
              },
              {
                value: "10.82",
                qualifiers: ["P"],
                dateTime: "2023-01-11T21:30:00.000-07:00",
              },
              {
                value: "10.82",
                qualifiers: ["P"],
                dateTime: "2023-01-11T21:45:00.000-07:00",
              },
              {
                value: "10.82",
                qualifiers: ["P"],
                dateTime: "2023-01-11T22:00:00.000-07:00",
              },
              {
                value: "10.82",
                qualifiers: ["P"],
                dateTime: "2023-01-11T22:15:00.000-07:00",
              },
              {
                value: "10.82",
                qualifiers: ["P"],
                dateTime: "2023-01-11T22:30:00.000-07:00",
              },
              {
                value: "10.82",
                qualifiers: ["P"],
                dateTime: "2023-01-11T22:45:00.000-07:00",
              },
              {
                value: "10.81",
                qualifiers: ["P"],
                dateTime: "2023-01-11T23:00:00.000-07:00",
              },
              {
                value: "10.82",
                qualifiers: ["P"],
                dateTime: "2023-01-11T23:15:00.000-07:00",
              },
              {
                value: "10.81",
                qualifiers: ["P"],
                dateTime: "2023-01-11T23:30:00.000-07:00",
              },
              {
                value: "10.82",
                qualifiers: ["P"],
                dateTime: "2023-01-11T23:45:00.000-07:00",
              },
              {
                value: "10.82",
                qualifiers: ["P"],
                dateTime: "2023-01-12T00:00:00.000-07:00",
              },
              {
                value: "10.81",
                qualifiers: ["P"],
                dateTime: "2023-01-12T00:15:00.000-07:00",
              },
              {
                value: "10.82",
                qualifiers: ["P"],
                dateTime: "2023-01-12T00:30:00.000-07:00",
              },
              {
                value: "10.81",
                qualifiers: ["P"],
                dateTime: "2023-01-12T00:45:00.000-07:00",
              },
              {
                value: "10.82",
                qualifiers: ["P"],
                dateTime: "2023-01-12T01:00:00.000-07:00",
              },
              {
                value: "10.82",
                qualifiers: ["P"],
                dateTime: "2023-01-12T01:15:00.000-07:00",
              },
              {
                value: "10.82",
                qualifiers: ["P"],
                dateTime: "2023-01-12T01:30:00.000-07:00",
              },
              {
                value: "10.82",
                qualifiers: ["P"],
                dateTime: "2023-01-12T01:45:00.000-07:00",
              },
              {
                value: "10.81",
                qualifiers: ["P"],
                dateTime: "2023-01-12T02:00:00.000-07:00",
              },
              {
                value: "10.82",
                qualifiers: ["P"],
                dateTime: "2023-01-12T02:15:00.000-07:00",
              },
              {
                value: "10.83",
                qualifiers: ["P"],
                dateTime: "2023-01-12T02:30:00.000-07:00",
              },
              {
                value: "10.82",
                qualifiers: ["P"],
                dateTime: "2023-01-12T02:45:00.000-07:00",
              },
              {
                value: "10.83",
                qualifiers: ["P"],
                dateTime: "2023-01-12T03:00:00.000-07:00",
              },
              {
                value: "10.83",
                qualifiers: ["P"],
                dateTime: "2023-01-12T03:15:00.000-07:00",
              },
              {
                value: "10.83",
                qualifiers: ["P"],
                dateTime: "2023-01-12T03:30:00.000-07:00",
              },
              {
                value: "10.83",
                qualifiers: ["P"],
                dateTime: "2023-01-12T03:45:00.000-07:00",
              },
              {
                value: "10.83",
                qualifiers: ["P"],
                dateTime: "2023-01-12T04:00:00.000-07:00",
              },
              {
                value: "10.83",
                qualifiers: ["P"],
                dateTime: "2023-01-12T04:15:00.000-07:00",
              },
              {
                value: "10.83",
                qualifiers: ["P"],
                dateTime: "2023-01-12T04:30:00.000-07:00",
              },
              {
                value: "10.83",
                qualifiers: ["P"],
                dateTime: "2023-01-12T04:45:00.000-07:00",
              },
              {
                value: "10.83",
                qualifiers: ["P"],
                dateTime: "2023-01-12T05:00:00.000-07:00",
              },
              {
                value: "10.83",
                qualifiers: ["P"],
                dateTime: "2023-01-12T05:15:00.000-07:00",
              },
              {
                value: "10.83",
                qualifiers: ["P"],
                dateTime: "2023-01-12T05:30:00.000-07:00",
              },
              {
                value: "10.82",
                qualifiers: ["P"],
                dateTime: "2023-01-12T05:45:00.000-07:00",
              },
              {
                value: "10.82",
                qualifiers: ["P"],
                dateTime: "2023-01-12T06:00:00.000-07:00",
              },
              {
                value: "10.82",
                qualifiers: ["P"],
                dateTime: "2023-01-12T06:15:00.000-07:00",
              },
              {
                value: "10.82",
                qualifiers: ["P"],
                dateTime: "2023-01-12T06:30:00.000-07:00",
              },
              {
                value: "10.82",
                qualifiers: ["P"],
                dateTime: "2023-01-12T06:45:00.000-07:00",
              },
              {
                value: "10.81",
                qualifiers: ["P"],
                dateTime: "2023-01-12T07:00:00.000-07:00",
              },
              {
                value: "10.81",
                qualifiers: ["P"],
                dateTime: "2023-01-12T07:15:00.000-07:00",
              },
              {
                value: "10.81",
                qualifiers: ["P"],
                dateTime: "2023-01-12T07:30:00.000-07:00",
              },
              {
                value: "10.80",
                qualifiers: ["P"],
                dateTime: "2023-01-12T07:45:00.000-07:00",
              },
              {
                value: "10.80",
                qualifiers: ["P"],
                dateTime: "2023-01-12T08:00:00.000-07:00",
              },
              {
                value: "10.80",
                qualifiers: ["P"],
                dateTime: "2023-01-12T08:15:00.000-07:00",
              },
              {
                value: "10.79",
                qualifiers: ["P"],
                dateTime: "2023-01-12T08:30:00.000-07:00",
              },
              {
                value: "10.79",
                qualifiers: ["P"],
                dateTime: "2023-01-12T08:45:00.000-07:00",
              },
              {
                value: "10.79",
                qualifiers: ["P"],
                dateTime: "2023-01-12T09:00:00.000-07:00",
              },
              {
                value: "10.79",
                qualifiers: ["P"],
                dateTime: "2023-01-12T09:15:00.000-07:00",
              },
              {
                value: "10.78",
                qualifiers: ["P"],
                dateTime: "2023-01-12T09:30:00.000-07:00",
              },
              {
                value: "10.78",
                qualifiers: ["P"],
                dateTime: "2023-01-12T09:45:00.000-07:00",
              },
              {
                value: "10.78",
                qualifiers: ["P"],
                dateTime: "2023-01-12T10:00:00.000-07:00",
              },
              {
                value: "10.77",
                qualifiers: ["P"],
                dateTime: "2023-01-12T10:15:00.000-07:00",
              },
              {
                value: "10.77",
                qualifiers: ["P"],
                dateTime: "2023-01-12T10:30:00.000-07:00",
              },
              {
                value: "10.76",
                qualifiers: ["P"],
                dateTime: "2023-01-12T10:45:00.000-07:00",
              },
              {
                value: "10.77",
                qualifiers: ["P"],
                dateTime: "2023-01-12T11:00:00.000-07:00",
              },
              {
                value: "10.76",
                qualifiers: ["P"],
                dateTime: "2023-01-12T11:15:00.000-07:00",
              },
              {
                value: "10.76",
                qualifiers: ["P"],
                dateTime: "2023-01-12T11:30:00.000-07:00",
              },
              {
                value: "10.76",
                qualifiers: ["P"],
                dateTime: "2023-01-12T11:45:00.000-07:00",
              },
              {
                value: "10.76",
                qualifiers: ["P"],
                dateTime: "2023-01-12T12:00:00.000-07:00",
              },
              {
                value: "10.75",
                qualifiers: ["P"],
                dateTime: "2023-01-12T12:15:00.000-07:00",
              },
              {
                value: "10.76",
                qualifiers: ["P"],
                dateTime: "2023-01-12T12:30:00.000-07:00",
              },
              {
                value: "10.76",
                qualifiers: ["P"],
                dateTime: "2023-01-12T12:45:00.000-07:00",
              },
              {
                value: "10.76",
                qualifiers: ["P"],
                dateTime: "2023-01-12T13:00:00.000-07:00",
              },
              {
                value: "10.75",
                qualifiers: ["P"],
                dateTime: "2023-01-12T13:15:00.000-07:00",
              },
              {
                value: "10.76",
                qualifiers: ["P"],
                dateTime: "2023-01-12T13:30:00.000-07:00",
              },
              {
                value: "10.76",
                qualifiers: ["P"],
                dateTime: "2023-01-12T13:45:00.000-07:00",
              },
              {
                value: "10.76",
                qualifiers: ["P"],
                dateTime: "2023-01-12T14:00:00.000-07:00",
              },
              {
                value: "10.76",
                qualifiers: ["P"],
                dateTime: "2023-01-12T14:15:00.000-07:00",
              },
              {
                value: "10.77",
                qualifiers: ["P"],
                dateTime: "2023-01-12T14:30:00.000-07:00",
              },
              {
                value: "10.77",
                qualifiers: ["P"],
                dateTime: "2023-01-12T14:45:00.000-07:00",
              },
              {
                value: "10.78",
                qualifiers: ["P"],
                dateTime: "2023-01-12T15:00:00.000-07:00",
              },
              {
                value: "10.79",
                qualifiers: ["P"],
                dateTime: "2023-01-12T15:15:00.000-07:00",
              },
              {
                value: "10.80",
                qualifiers: ["P"],
                dateTime: "2023-01-12T15:30:00.000-07:00",
              },
              {
                value: "10.80",
                qualifiers: ["P"],
                dateTime: "2023-01-12T15:45:00.000-07:00",
              },
              {
                value: "10.81",
                qualifiers: ["P"],
                dateTime: "2023-01-12T16:00:00.000-07:00",
              },
              {
                value: "10.82",
                qualifiers: ["P"],
                dateTime: "2023-01-12T16:15:00.000-07:00",
              },
              {
                value: "10.82",
                qualifiers: ["P"],
                dateTime: "2023-01-12T16:30:00.000-07:00",
              },
              {
                value: "10.83",
                qualifiers: ["P"],
                dateTime: "2023-01-12T16:45:00.000-07:00",
              },
              {
                value: "10.83",
                qualifiers: ["P"],
                dateTime: "2023-01-12T17:00:00.000-07:00",
              },
              {
                value: "10.83",
                qualifiers: ["P"],
                dateTime: "2023-01-12T17:15:00.000-07:00",
              },
              {
                value: "10.84",
                qualifiers: ["P"],
                dateTime: "2023-01-12T17:30:00.000-07:00",
              },
              {
                value: "10.83",
                qualifiers: ["P"],
                dateTime: "2023-01-12T17:45:00.000-07:00",
              },
              {
                value: "10.84",
                qualifiers: ["P"],
                dateTime: "2023-01-12T18:00:00.000-07:00",
              },
              {
                value: "10.84",
                qualifiers: ["P"],
                dateTime: "2023-01-12T18:15:00.000-07:00",
              },
              {
                value: "10.83",
                qualifiers: ["P"],
                dateTime: "2023-01-12T18:30:00.000-07:00",
              },
              {
                value: "10.83",
                qualifiers: ["P"],
                dateTime: "2023-01-12T18:45:00.000-07:00",
              },
              {
                value: "10.83",
                qualifiers: ["P"],
                dateTime: "2023-01-12T19:00:00.000-07:00",
              },
              {
                value: "10.83",
                qualifiers: ["P"],
                dateTime: "2023-01-12T19:15:00.000-07:00",
              },
              {
                value: "10.82",
                qualifiers: ["P"],
                dateTime: "2023-01-12T19:30:00.000-07:00",
              },
              {
                value: "10.82",
                qualifiers: ["P"],
                dateTime: "2023-01-12T19:45:00.000-07:00",
              },
              {
                value: "10.83",
                qualifiers: ["P"],
                dateTime: "2023-01-12T20:00:00.000-07:00",
              },
              {
                value: "10.82",
                qualifiers: ["P"],
                dateTime: "2023-01-12T20:15:00.000-07:00",
              },
              {
                value: "10.82",
                qualifiers: ["P"],
                dateTime: "2023-01-12T20:30:00.000-07:00",
              },
              {
                value: "10.82",
                qualifiers: ["P"],
                dateTime: "2023-01-12T20:45:00.000-07:00",
              },
              {
                value: "10.81",
                qualifiers: ["P"],
                dateTime: "2023-01-12T21:00:00.000-07:00",
              },
              {
                value: "10.81",
                qualifiers: ["P"],
                dateTime: "2023-01-12T21:15:00.000-07:00",
              },
              {
                value: "10.81",
                qualifiers: ["P"],
                dateTime: "2023-01-12T21:30:00.000-07:00",
              },
              {
                value: "10.81",
                qualifiers: ["P"],
                dateTime: "2023-01-12T21:45:00.000-07:00",
              },
              {
                value: "10.81",
                qualifiers: ["P"],
                dateTime: "2023-01-12T22:00:00.000-07:00",
              },
              {
                value: "10.80",
                qualifiers: ["P"],
                dateTime: "2023-01-12T22:15:00.000-07:00",
              },
              {
                value: "10.80",
                qualifiers: ["P"],
                dateTime: "2023-01-12T22:30:00.000-07:00",
              },
              {
                value: "10.80",
                qualifiers: ["P"],
                dateTime: "2023-01-12T22:45:00.000-07:00",
              },
              {
                value: "10.80",
                qualifiers: ["P"],
                dateTime: "2023-01-12T23:00:00.000-07:00",
              },
              {
                value: "10.80",
                qualifiers: ["P"],
                dateTime: "2023-01-12T23:15:00.000-07:00",
              },
              {
                value: "10.80",
                qualifiers: ["P"],
                dateTime: "2023-01-12T23:30:00.000-07:00",
              },
              {
                value: "10.80",
                qualifiers: ["P"],
                dateTime: "2023-01-12T23:45:00.000-07:00",
              },
              {
                value: "10.80",
                qualifiers: ["P"],
                dateTime: "2023-01-13T00:00:00.000-07:00",
              },
              {
                value: "10.79",
                qualifiers: ["P"],
                dateTime: "2023-01-13T00:15:00.000-07:00",
              },
              {
                value: "10.80",
                qualifiers: ["P"],
                dateTime: "2023-01-13T00:30:00.000-07:00",
              },
              {
                value: "10.80",
                qualifiers: ["P"],
                dateTime: "2023-01-13T00:45:00.000-07:00",
              },
              {
                value: "10.80",
                qualifiers: ["P"],
                dateTime: "2023-01-13T01:00:00.000-07:00",
              },
              {
                value: "10.80",
                qualifiers: ["P"],
                dateTime: "2023-01-13T01:15:00.000-07:00",
              },
              {
                value: "10.80",
                qualifiers: ["P"],
                dateTime: "2023-01-13T01:30:00.000-07:00",
              },
              {
                value: "10.80",
                qualifiers: ["P"],
                dateTime: "2023-01-13T01:45:00.000-07:00",
              },
              {
                value: "10.81",
                qualifiers: ["P"],
                dateTime: "2023-01-13T02:00:00.000-07:00",
              },
              {
                value: "10.81",
                qualifiers: ["P"],
                dateTime: "2023-01-13T02:15:00.000-07:00",
              },
              {
                value: "10.81",
                qualifiers: ["P"],
                dateTime: "2023-01-13T02:30:00.000-07:00",
              },
              {
                value: "10.82",
                qualifiers: ["P"],
                dateTime: "2023-01-13T02:45:00.000-07:00",
              },
              {
                value: "10.82",
                qualifiers: ["P"],
                dateTime: "2023-01-13T03:00:00.000-07:00",
              },
              {
                value: "10.82",
                qualifiers: ["P"],
                dateTime: "2023-01-13T03:15:00.000-07:00",
              },
              {
                value: "10.82",
                qualifiers: ["P"],
                dateTime: "2023-01-13T03:30:00.000-07:00",
              },
              {
                value: "10.82",
                qualifiers: ["P"],
                dateTime: "2023-01-13T03:45:00.000-07:00",
              },
              {
                value: "10.83",
                qualifiers: ["P"],
                dateTime: "2023-01-13T04:00:00.000-07:00",
              },
              {
                value: "10.82",
                qualifiers: ["P"],
                dateTime: "2023-01-13T04:15:00.000-07:00",
              },
              {
                value: "10.82",
                qualifiers: ["P"],
                dateTime: "2023-01-13T04:30:00.000-07:00",
              },
              {
                value: "10.82",
                qualifiers: ["P"],
                dateTime: "2023-01-13T04:45:00.000-07:00",
              },
              {
                value: "10.82",
                qualifiers: ["P"],
                dateTime: "2023-01-13T05:00:00.000-07:00",
              },
              {
                value: "10.82",
                qualifiers: ["P"],
                dateTime: "2023-01-13T05:15:00.000-07:00",
              },
              {
                value: "10.82",
                qualifiers: ["P"],
                dateTime: "2023-01-13T05:30:00.000-07:00",
              },
              {
                value: "10.82",
                qualifiers: ["P"],
                dateTime: "2023-01-13T05:45:00.000-07:00",
              },
              {
                value: "10.82",
                qualifiers: ["P"],
                dateTime: "2023-01-13T06:00:00.000-07:00",
              },
              {
                value: "10.82",
                qualifiers: ["P"],
                dateTime: "2023-01-13T06:15:00.000-07:00",
              },
              {
                value: "10.81",
                qualifiers: ["P"],
                dateTime: "2023-01-13T06:30:00.000-07:00",
              },
              {
                value: "10.81",
                qualifiers: ["P"],
                dateTime: "2023-01-13T06:45:00.000-07:00",
              },
              {
                value: "10.81",
                qualifiers: ["P"],
                dateTime: "2023-01-13T07:00:00.000-07:00",
              },
              {
                value: "10.80",
                qualifiers: ["P"],
                dateTime: "2023-01-13T07:15:00.000-07:00",
              },
              {
                value: "10.80",
                qualifiers: ["P"],
                dateTime: "2023-01-13T07:30:00.000-07:00",
              },
              {
                value: "10.80",
                qualifiers: ["P"],
                dateTime: "2023-01-13T07:45:00.000-07:00",
              },
              {
                value: "10.80",
                qualifiers: ["P"],
                dateTime: "2023-01-13T08:00:00.000-07:00",
              },
              {
                value: "10.79",
                qualifiers: ["P"],
                dateTime: "2023-01-13T08:15:00.000-07:00",
              },
              {
                value: "10.79",
                qualifiers: ["P"],
                dateTime: "2023-01-13T08:30:00.000-07:00",
              },
              {
                value: "10.79",
                qualifiers: ["P"],
                dateTime: "2023-01-13T08:45:00.000-07:00",
              },
              {
                value: "10.78",
                qualifiers: ["P"],
                dateTime: "2023-01-13T09:00:00.000-07:00",
              },
              {
                value: "10.78",
                qualifiers: ["P"],
                dateTime: "2023-01-13T09:15:00.000-07:00",
              },
              {
                value: "10.78",
                qualifiers: ["P"],
                dateTime: "2023-01-13T09:30:00.000-07:00",
              },
              {
                value: "10.77",
                qualifiers: ["P"],
                dateTime: "2023-01-13T09:45:00.000-07:00",
              },
              {
                value: "10.77",
                qualifiers: ["P"],
                dateTime: "2023-01-13T10:00:00.000-07:00",
              },
              {
                value: "10.76",
                qualifiers: ["P"],
                dateTime: "2023-01-13T10:15:00.000-07:00",
              },
              {
                value: "10.77",
                qualifiers: ["P"],
                dateTime: "2023-01-13T10:30:00.000-07:00",
              },
              {
                value: "10.76",
                qualifiers: ["P"],
                dateTime: "2023-01-13T10:45:00.000-07:00",
              },
              {
                value: "10.76",
                qualifiers: ["P"],
                dateTime: "2023-01-13T11:00:00.000-07:00",
              },
              {
                value: "10.76",
                qualifiers: ["P"],
                dateTime: "2023-01-13T11:15:00.000-07:00",
              },
              {
                value: "10.76",
                qualifiers: ["P"],
                dateTime: "2023-01-13T11:30:00.000-07:00",
              },
              {
                value: "10.76",
                qualifiers: ["P"],
                dateTime: "2023-01-13T11:45:00.000-07:00",
              },
              {
                value: "10.77",
                qualifiers: ["P"],
                dateTime: "2023-01-13T12:00:00.000-07:00",
              },
              {
                value: "10.77",
                qualifiers: ["P"],
                dateTime: "2023-01-13T12:15:00.000-07:00",
              },
              {
                value: "10.77",
                qualifiers: ["P"],
                dateTime: "2023-01-13T12:30:00.000-07:00",
              },
              {
                value: "10.77",
                qualifiers: ["P"],
                dateTime: "2023-01-13T12:45:00.000-07:00",
              },
              {
                value: "10.77",
                qualifiers: ["P"],
                dateTime: "2023-01-13T13:00:00.000-07:00",
              },
              {
                value: "10.77",
                qualifiers: ["P"],
                dateTime: "2023-01-13T13:15:00.000-07:00",
              },
              {
                value: "10.77",
                qualifiers: ["P"],
                dateTime: "2023-01-13T13:30:00.000-07:00",
              },
              {
                value: "10.77",
                qualifiers: ["P"],
                dateTime: "2023-01-13T13:45:00.000-07:00",
              },
              {
                value: "10.77",
                qualifiers: ["P"],
                dateTime: "2023-01-13T14:00:00.000-07:00",
              },
              {
                value: "10.77",
                qualifiers: ["P"],
                dateTime: "2023-01-13T14:15:00.000-07:00",
              },
              {
                value: "10.77",
                qualifiers: ["P"],
                dateTime: "2023-01-13T14:30:00.000-07:00",
              },
              {
                value: "10.78",
                qualifiers: ["P"],
                dateTime: "2023-01-13T14:45:00.000-07:00",
              },
              {
                value: "10.78",
                qualifiers: ["P"],
                dateTime: "2023-01-13T15:00:00.000-07:00",
              },
              {
                value: "10.79",
                qualifiers: ["P"],
                dateTime: "2023-01-13T15:15:00.000-07:00",
              },
              {
                value: "10.79",
                qualifiers: ["P"],
                dateTime: "2023-01-13T15:30:00.000-07:00",
              },
              {
                value: "10.80",
                qualifiers: ["P"],
                dateTime: "2023-01-13T15:45:00.000-07:00",
              },
              {
                value: "10.81",
                qualifiers: ["P"],
                dateTime: "2023-01-13T16:00:00.000-07:00",
              },
              {
                value: "10.83",
                qualifiers: ["P"],
                dateTime: "2023-01-13T16:15:00.000-07:00",
              },
              {
                value: "10.83",
                qualifiers: ["P"],
                dateTime: "2023-01-13T16:30:00.000-07:00",
              },
              {
                value: "10.84",
                qualifiers: ["P"],
                dateTime: "2023-01-13T16:45:00.000-07:00",
              },
              {
                value: "10.84",
                qualifiers: ["P"],
                dateTime: "2023-01-13T17:00:00.000-07:00",
              },
              {
                value: "10.85",
                qualifiers: ["P"],
                dateTime: "2023-01-13T17:15:00.000-07:00",
              },
              {
                value: "10.85",
                qualifiers: ["P"],
                dateTime: "2023-01-13T17:30:00.000-07:00",
              },
              {
                value: "10.85",
                qualifiers: ["P"],
                dateTime: "2023-01-13T17:45:00.000-07:00",
              },
              {
                value: "10.85",
                qualifiers: ["P"],
                dateTime: "2023-01-13T18:00:00.000-07:00",
              },
              {
                value: "10.85",
                qualifiers: ["P"],
                dateTime: "2023-01-13T18:15:00.000-07:00",
              },
              {
                value: "10.85",
                qualifiers: ["P"],
                dateTime: "2023-01-13T18:30:00.000-07:00",
              },
              {
                value: "10.85",
                qualifiers: ["P"],
                dateTime: "2023-01-13T18:45:00.000-07:00",
              },
              {
                value: "10.84",
                qualifiers: ["P"],
                dateTime: "2023-01-13T19:00:00.000-07:00",
              },
              {
                value: "10.85",
                qualifiers: ["P"],
                dateTime: "2023-01-13T19:15:00.000-07:00",
              },
              {
                value: "10.85",
                qualifiers: ["P"],
                dateTime: "2023-01-13T19:30:00.000-07:00",
              },
              {
                value: "10.84",
                qualifiers: ["P"],
                dateTime: "2023-01-13T19:45:00.000-07:00",
              },
              {
                value: "10.84",
                qualifiers: ["P"],
                dateTime: "2023-01-13T20:00:00.000-07:00",
              },
              {
                value: "10.85",
                qualifiers: ["P"],
                dateTime: "2023-01-13T20:15:00.000-07:00",
              },
              {
                value: "10.85",
                qualifiers: ["P"],
                dateTime: "2023-01-13T20:30:00.000-07:00",
              },
              {
                value: "10.85",
                qualifiers: ["P"],
                dateTime: "2023-01-13T20:45:00.000-07:00",
              },
              {
                value: "10.85",
                qualifiers: ["P"],
                dateTime: "2023-01-13T21:00:00.000-07:00",
              },
              {
                value: "10.85",
                qualifiers: ["P"],
                dateTime: "2023-01-13T21:15:00.000-07:00",
              },
              {
                value: "10.85",
                qualifiers: ["P"],
                dateTime: "2023-01-13T21:30:00.000-07:00",
              },
              {
                value: "10.84",
                qualifiers: ["P"],
                dateTime: "2023-01-13T21:45:00.000-07:00",
              },
              {
                value: "10.84",
                qualifiers: ["P"],
                dateTime: "2023-01-13T22:00:00.000-07:00",
              },
              {
                value: "10.85",
                qualifiers: ["P"],
                dateTime: "2023-01-13T22:15:00.000-07:00",
              },
              {
                value: "10.85",
                qualifiers: ["P"],
                dateTime: "2023-01-13T22:30:00.000-07:00",
              },
              {
                value: "10.84",
                qualifiers: ["P"],
                dateTime: "2023-01-13T22:45:00.000-07:00",
              },
              {
                value: "10.84",
                qualifiers: ["P"],
                dateTime: "2023-01-13T23:00:00.000-07:00",
              },
              {
                value: "10.84",
                qualifiers: ["P"],
                dateTime: "2023-01-13T23:15:00.000-07:00",
              },
              {
                value: "10.84",
                qualifiers: ["P"],
                dateTime: "2023-01-13T23:30:00.000-07:00",
              },
              {
                value: "10.85",
                qualifiers: ["P"],
                dateTime: "2023-01-13T23:45:00.000-07:00",
              },
              {
                value: "10.84",
                qualifiers: ["P"],
                dateTime: "2023-01-14T00:00:00.000-07:00",
              },
              {
                value: "10.84",
                qualifiers: ["P"],
                dateTime: "2023-01-14T00:15:00.000-07:00",
              },
              {
                value: "10.84",
                qualifiers: ["P"],
                dateTime: "2023-01-14T00:30:00.000-07:00",
              },
              {
                value: "10.84",
                qualifiers: ["P"],
                dateTime: "2023-01-14T00:45:00.000-07:00",
              },
              {
                value: "10.84",
                qualifiers: ["P"],
                dateTime: "2023-01-14T01:00:00.000-07:00",
              },
              {
                value: "10.84",
                qualifiers: ["P"],
                dateTime: "2023-01-14T01:15:00.000-07:00",
              },
              {
                value: "10.84",
                qualifiers: ["P"],
                dateTime: "2023-01-14T01:30:00.000-07:00",
              },
              {
                value: "10.84",
                qualifiers: ["P"],
                dateTime: "2023-01-14T01:45:00.000-07:00",
              },
              {
                value: "10.84",
                qualifiers: ["P"],
                dateTime: "2023-01-14T02:00:00.000-07:00",
              },
              {
                value: "10.84",
                qualifiers: ["P"],
                dateTime: "2023-01-14T02:15:00.000-07:00",
              },
              {
                value: "10.84",
                qualifiers: ["P"],
                dateTime: "2023-01-14T02:30:00.000-07:00",
              },
              {
                value: "10.84",
                qualifiers: ["P"],
                dateTime: "2023-01-14T02:45:00.000-07:00",
              },
              {
                value: "10.83",
                qualifiers: ["P"],
                dateTime: "2023-01-14T03:00:00.000-07:00",
              },
              {
                value: "10.83",
                qualifiers: ["P"],
                dateTime: "2023-01-14T03:15:00.000-07:00",
              },
              {
                value: "10.83",
                qualifiers: ["P"],
                dateTime: "2023-01-14T03:30:00.000-07:00",
              },
              {
                value: "10.83",
                qualifiers: ["P"],
                dateTime: "2023-01-14T03:45:00.000-07:00",
              },
              {
                value: "10.83",
                qualifiers: ["P"],
                dateTime: "2023-01-14T04:00:00.000-07:00",
              },
              {
                value: "10.83",
                qualifiers: ["P"],
                dateTime: "2023-01-14T04:15:00.000-07:00",
              },
              {
                value: "10.83",
                qualifiers: ["P"],
                dateTime: "2023-01-14T04:30:00.000-07:00",
              },
              {
                value: "10.83",
                qualifiers: ["P"],
                dateTime: "2023-01-14T04:45:00.000-07:00",
              },
              {
                value: "10.83",
                qualifiers: ["P"],
                dateTime: "2023-01-14T05:00:00.000-07:00",
              },
              {
                value: "10.82",
                qualifiers: ["P"],
                dateTime: "2023-01-14T05:15:00.000-07:00",
              },
              {
                value: "10.82",
                qualifiers: ["P"],
                dateTime: "2023-01-14T05:30:00.000-07:00",
              },
              {
                value: "10.82",
                qualifiers: ["P"],
                dateTime: "2023-01-14T05:45:00.000-07:00",
              },
              {
                value: "10.82",
                qualifiers: ["P"],
                dateTime: "2023-01-14T06:00:00.000-07:00",
              },
              {
                value: "10.82",
                qualifiers: ["P"],
                dateTime: "2023-01-14T06:15:00.000-07:00",
              },
              {
                value: "10.81",
                qualifiers: ["P"],
                dateTime: "2023-01-14T06:30:00.000-07:00",
              },
              {
                value: "10.81",
                qualifiers: ["P"],
                dateTime: "2023-01-14T06:45:00.000-07:00",
              },
              {
                value: "10.81",
                qualifiers: ["P"],
                dateTime: "2023-01-14T07:00:00.000-07:00",
              },
              {
                value: "10.81",
                qualifiers: ["P"],
                dateTime: "2023-01-14T07:15:00.000-07:00",
              },
              {
                value: "10.81",
                qualifiers: ["P"],
                dateTime: "2023-01-14T07:30:00.000-07:00",
              },
              {
                value: "10.80",
                qualifiers: ["P"],
                dateTime: "2023-01-14T07:45:00.000-07:00",
              },
              {
                value: "10.81",
                qualifiers: ["P"],
                dateTime: "2023-01-14T08:00:00.000-07:00",
              },
              {
                value: "10.81",
                qualifiers: ["P"],
                dateTime: "2023-01-14T08:15:00.000-07:00",
              },
              {
                value: "10.81",
                qualifiers: ["P"],
                dateTime: "2023-01-14T08:30:00.000-07:00",
              },
              {
                value: "10.81",
                qualifiers: ["P"],
                dateTime: "2023-01-14T08:45:00.000-07:00",
              },
              {
                value: "10.80",
                qualifiers: ["P"],
                dateTime: "2023-01-14T09:00:00.000-07:00",
              },
              {
                value: "10.80",
                qualifiers: ["P"],
                dateTime: "2023-01-14T09:15:00.000-07:00",
              },
              {
                value: "10.80",
                qualifiers: ["P"],
                dateTime: "2023-01-14T09:30:00.000-07:00",
              },
              {
                value: "10.80",
                qualifiers: ["P"],
                dateTime: "2023-01-14T09:45:00.000-07:00",
              },
              {
                value: "10.80",
                qualifiers: ["P"],
                dateTime: "2023-01-14T10:00:00.000-07:00",
              },
              {
                value: "10.79",
                qualifiers: ["P"],
                dateTime: "2023-01-14T10:15:00.000-07:00",
              },
              {
                value: "10.79",
                qualifiers: ["P"],
                dateTime: "2023-01-14T10:30:00.000-07:00",
              },
              {
                value: "10.79",
                qualifiers: ["P"],
                dateTime: "2023-01-14T10:45:00.000-07:00",
              },
              {
                value: "10.79",
                qualifiers: ["P"],
                dateTime: "2023-01-14T11:00:00.000-07:00",
              },
              {
                value: "10.79",
                qualifiers: ["P"],
                dateTime: "2023-01-14T11:15:00.000-07:00",
              },
              {
                value: "10.79",
                qualifiers: ["P"],
                dateTime: "2023-01-14T11:30:00.000-07:00",
              },
              {
                value: "10.79",
                qualifiers: ["P"],
                dateTime: "2023-01-14T11:45:00.000-07:00",
              },
              {
                value: "10.79",
                qualifiers: ["P"],
                dateTime: "2023-01-14T12:00:00.000-07:00",
              },
              {
                value: "10.78",
                qualifiers: ["P"],
                dateTime: "2023-01-14T12:15:00.000-07:00",
              },
              {
                value: "10.78",
                qualifiers: ["P"],
                dateTime: "2023-01-14T12:30:00.000-07:00",
              },
              {
                value: "10.78",
                qualifiers: ["P"],
                dateTime: "2023-01-14T12:45:00.000-07:00",
              },
              {
                value: "10.78",
                qualifiers: ["P"],
                dateTime: "2023-01-14T13:00:00.000-07:00",
              },
              {
                value: "10.78",
                qualifiers: ["P"],
                dateTime: "2023-01-14T13:15:00.000-07:00",
              },
              {
                value: "10.78",
                qualifiers: ["P"],
                dateTime: "2023-01-14T13:30:00.000-07:00",
              },
              {
                value: "10.78",
                qualifiers: ["P"],
                dateTime: "2023-01-14T13:45:00.000-07:00",
              },
              {
                value: "10.78",
                qualifiers: ["P"],
                dateTime: "2023-01-14T14:00:00.000-07:00",
              },
              {
                value: "10.78",
                qualifiers: ["P"],
                dateTime: "2023-01-14T14:15:00.000-07:00",
              },
              {
                value: "10.78",
                qualifiers: ["P"],
                dateTime: "2023-01-14T14:30:00.000-07:00",
              },
              {
                value: "10.78",
                qualifiers: ["P"],
                dateTime: "2023-01-14T14:45:00.000-07:00",
              },
              {
                value: "10.78",
                qualifiers: ["P"],
                dateTime: "2023-01-14T15:00:00.000-07:00",
              },
              {
                value: "10.79",
                qualifiers: ["P"],
                dateTime: "2023-01-14T15:15:00.000-07:00",
              },
              {
                value: "10.79",
                qualifiers: ["P"],
                dateTime: "2023-01-14T15:30:00.000-07:00",
              },
              {
                value: "10.80",
                qualifiers: ["P"],
                dateTime: "2023-01-14T15:45:00.000-07:00",
              },
              {
                value: "10.81",
                qualifiers: ["P"],
                dateTime: "2023-01-14T16:00:00.000-07:00",
              },
              {
                value: "10.81",
                qualifiers: ["P"],
                dateTime: "2023-01-14T16:15:00.000-07:00",
              },
              {
                value: "10.82",
                qualifiers: ["P"],
                dateTime: "2023-01-14T16:30:00.000-07:00",
              },
              {
                value: "10.82",
                qualifiers: ["P"],
                dateTime: "2023-01-14T16:45:00.000-07:00",
              },
              {
                value: "10.83",
                qualifiers: ["P"],
                dateTime: "2023-01-14T17:00:00.000-07:00",
              },
              {
                value: "10.84",
                qualifiers: ["P"],
                dateTime: "2023-01-14T17:15:00.000-07:00",
              },
              {
                value: "10.85",
                qualifiers: ["P"],
                dateTime: "2023-01-14T17:30:00.000-07:00",
              },
              {
                value: "10.86",
                qualifiers: ["P"],
                dateTime: "2023-01-14T17:45:00.000-07:00",
              },
              {
                value: "10.86",
                qualifiers: ["P"],
                dateTime: "2023-01-14T18:00:00.000-07:00",
              },
              {
                value: "10.87",
                qualifiers: ["P"],
                dateTime: "2023-01-14T18:15:00.000-07:00",
              },
              {
                value: "10.87",
                qualifiers: ["P"],
                dateTime: "2023-01-14T18:30:00.000-07:00",
              },
              {
                value: "10.88",
                qualifiers: ["P"],
                dateTime: "2023-01-14T18:45:00.000-07:00",
              },
              {
                value: "10.88",
                qualifiers: ["P"],
                dateTime: "2023-01-14T19:00:00.000-07:00",
              },
              {
                value: "10.89",
                qualifiers: ["P"],
                dateTime: "2023-01-14T19:15:00.000-07:00",
              },
              {
                value: "10.88",
                qualifiers: ["P"],
                dateTime: "2023-01-14T19:30:00.000-07:00",
              },
              {
                value: "10.89",
                qualifiers: ["P"],
                dateTime: "2023-01-14T19:45:00.000-07:00",
              },
              {
                value: "10.89",
                qualifiers: ["P"],
                dateTime: "2023-01-14T20:00:00.000-07:00",
              },
              {
                value: "10.89",
                qualifiers: ["P"],
                dateTime: "2023-01-14T20:15:00.000-07:00",
              },
              {
                value: "10.90",
                qualifiers: ["P"],
                dateTime: "2023-01-14T20:30:00.000-07:00",
              },
              {
                value: "10.90",
                qualifiers: ["P"],
                dateTime: "2023-01-14T20:45:00.000-07:00",
              },
              {
                value: "10.89",
                qualifiers: ["P"],
                dateTime: "2023-01-14T21:00:00.000-07:00",
              },
              {
                value: "10.90",
                qualifiers: ["P"],
                dateTime: "2023-01-14T21:15:00.000-07:00",
              },
              {
                value: "10.90",
                qualifiers: ["P"],
                dateTime: "2023-01-14T21:30:00.000-07:00",
              },
              {
                value: "10.89",
                qualifiers: ["P"],
                dateTime: "2023-01-14T21:45:00.000-07:00",
              },
              {
                value: "10.89",
                qualifiers: ["P"],
                dateTime: "2023-01-14T22:00:00.000-07:00",
              },
              {
                value: "10.89",
                qualifiers: ["P"],
                dateTime: "2023-01-14T22:15:00.000-07:00",
              },
              {
                value: "10.89",
                qualifiers: ["P"],
                dateTime: "2023-01-14T22:30:00.000-07:00",
              },
              {
                value: "10.89",
                qualifiers: ["P"],
                dateTime: "2023-01-14T22:45:00.000-07:00",
              },
              {
                value: "10.89",
                qualifiers: ["P"],
                dateTime: "2023-01-14T23:00:00.000-07:00",
              },
              {
                value: "10.89",
                qualifiers: ["P"],
                dateTime: "2023-01-14T23:15:00.000-07:00",
              },
              {
                value: "10.89",
                qualifiers: ["P"],
                dateTime: "2023-01-14T23:30:00.000-07:00",
              },
              {
                value: "10.89",
                qualifiers: ["P"],
                dateTime: "2023-01-14T23:45:00.000-07:00",
              },
              {
                value: "10.88",
                qualifiers: ["P"],
                dateTime: "2023-01-15T00:00:00.000-07:00",
              },
              {
                value: "10.88",
                qualifiers: ["P"],
                dateTime: "2023-01-15T00:15:00.000-07:00",
              },
              {
                value: "10.88",
                qualifiers: ["P"],
                dateTime: "2023-01-15T00:30:00.000-07:00",
              },
              {
                value: "10.88",
                qualifiers: ["P"],
                dateTime: "2023-01-15T00:45:00.000-07:00",
              },
              {
                value: "10.88",
                qualifiers: ["P"],
                dateTime: "2023-01-15T01:00:00.000-07:00",
              },
              {
                value: "10.87",
                qualifiers: ["P"],
                dateTime: "2023-01-15T01:15:00.000-07:00",
              },
              {
                value: "10.88",
                qualifiers: ["P"],
                dateTime: "2023-01-15T01:30:00.000-07:00",
              },
              {
                value: "10.88",
                qualifiers: ["P"],
                dateTime: "2023-01-15T01:45:00.000-07:00",
              },
              {
                value: "10.88",
                qualifiers: ["P"],
                dateTime: "2023-01-15T02:00:00.000-07:00",
              },
              {
                value: "10.88",
                qualifiers: ["P"],
                dateTime: "2023-01-15T02:15:00.000-07:00",
              },
              {
                value: "10.87",
                qualifiers: ["P"],
                dateTime: "2023-01-15T02:30:00.000-07:00",
              },
              {
                value: "10.87",
                qualifiers: ["P"],
                dateTime: "2023-01-15T02:45:00.000-07:00",
              },
              {
                value: "10.87",
                qualifiers: ["P"],
                dateTime: "2023-01-15T03:00:00.000-07:00",
              },
              {
                value: "10.86",
                qualifiers: ["P"],
                dateTime: "2023-01-15T03:15:00.000-07:00",
              },
              {
                value: "10.87",
                qualifiers: ["P"],
                dateTime: "2023-01-15T03:30:00.000-07:00",
              },
              {
                value: "10.86",
                qualifiers: ["P"],
                dateTime: "2023-01-15T03:45:00.000-07:00",
              },
              {
                value: "10.86",
                qualifiers: ["P"],
                dateTime: "2023-01-15T04:00:00.000-07:00",
              },
              {
                value: "10.86",
                qualifiers: ["P"],
                dateTime: "2023-01-15T04:15:00.000-07:00",
              },
              {
                value: "10.86",
                qualifiers: ["P"],
                dateTime: "2023-01-15T04:30:00.000-07:00",
              },
              {
                value: "10.86",
                qualifiers: ["P"],
                dateTime: "2023-01-15T04:45:00.000-07:00",
              },
              {
                value: "10.85",
                qualifiers: ["P"],
                dateTime: "2023-01-15T05:00:00.000-07:00",
              },
              {
                value: "10.85",
                qualifiers: ["P"],
                dateTime: "2023-01-15T05:15:00.000-07:00",
              },
              {
                value: "10.85",
                qualifiers: ["P"],
                dateTime: "2023-01-15T05:30:00.000-07:00",
              },
              {
                value: "10.85",
                qualifiers: ["P"],
                dateTime: "2023-01-15T05:45:00.000-07:00",
              },
              {
                value: "10.85",
                qualifiers: ["P"],
                dateTime: "2023-01-15T06:00:00.000-07:00",
              },
              {
                value: "10.85",
                qualifiers: ["P"],
                dateTime: "2023-01-15T06:15:00.000-07:00",
              },
              {
                value: "10.84",
                qualifiers: ["P"],
                dateTime: "2023-01-15T06:30:00.000-07:00",
              },
              {
                value: "10.84",
                qualifiers: ["P"],
                dateTime: "2023-01-15T06:45:00.000-07:00",
              },
              {
                value: "10.83",
                qualifiers: ["P"],
                dateTime: "2023-01-15T07:00:00.000-07:00",
              },
              {
                value: "10.83",
                qualifiers: ["P"],
                dateTime: "2023-01-15T07:15:00.000-07:00",
              },
              {
                value: "10.83",
                qualifiers: ["P"],
                dateTime: "2023-01-15T07:30:00.000-07:00",
              },
              {
                value: "10.82",
                qualifiers: ["P"],
                dateTime: "2023-01-15T07:45:00.000-07:00",
              },
              {
                value: "10.82",
                qualifiers: ["P"],
                dateTime: "2023-01-15T08:00:00.000-07:00",
              },
              {
                value: "10.82",
                qualifiers: ["P"],
                dateTime: "2023-01-15T08:15:00.000-07:00",
              },
              {
                value: "10.82",
                qualifiers: ["P"],
                dateTime: "2023-01-15T08:30:00.000-07:00",
              },
              {
                value: "10.82",
                qualifiers: ["P"],
                dateTime: "2023-01-15T08:45:00.000-07:00",
              },
              {
                value: "10.81",
                qualifiers: ["P"],
                dateTime: "2023-01-15T09:00:00.000-07:00",
              },
              {
                value: "10.81",
                qualifiers: ["P"],
                dateTime: "2023-01-15T09:15:00.000-07:00",
              },
              {
                value: "10.81",
                qualifiers: ["P"],
                dateTime: "2023-01-15T09:30:00.000-07:00",
              },
              {
                value: "10.81",
                qualifiers: ["P"],
                dateTime: "2023-01-15T09:45:00.000-07:00",
              },
              {
                value: "10.80",
                qualifiers: ["P"],
                dateTime: "2023-01-15T10:00:00.000-07:00",
              },
              {
                value: "10.80",
                qualifiers: ["P"],
                dateTime: "2023-01-15T10:15:00.000-07:00",
              },
              {
                value: "10.80",
                qualifiers: ["P"],
                dateTime: "2023-01-15T10:30:00.000-07:00",
              },
              {
                value: "10.80",
                qualifiers: ["P"],
                dateTime: "2023-01-15T10:45:00.000-07:00",
              },
              {
                value: "10.79",
                qualifiers: ["P"],
                dateTime: "2023-01-15T11:00:00.000-07:00",
              },
              {
                value: "10.80",
                qualifiers: ["P"],
                dateTime: "2023-01-15T11:15:00.000-07:00",
              },
              {
                value: "10.79",
                qualifiers: ["P"],
                dateTime: "2023-01-15T11:30:00.000-07:00",
              },
              {
                value: "10.79",
                qualifiers: ["P"],
                dateTime: "2023-01-15T11:45:00.000-07:00",
              },
              {
                value: "10.79",
                qualifiers: ["P"],
                dateTime: "2023-01-15T12:00:00.000-07:00",
              },
              {
                value: "10.79",
                qualifiers: ["P"],
                dateTime: "2023-01-15T12:15:00.000-07:00",
              },
              {
                value: "10.79",
                qualifiers: ["P"],
                dateTime: "2023-01-15T12:30:00.000-07:00",
              },
              {
                value: "10.78",
                qualifiers: ["P"],
                dateTime: "2023-01-15T12:45:00.000-07:00",
              },
              {
                value: "10.78",
                qualifiers: ["P"],
                dateTime: "2023-01-15T13:00:00.000-07:00",
              },
              {
                value: "10.78",
                qualifiers: ["P"],
                dateTime: "2023-01-15T13:15:00.000-07:00",
              },
              {
                value: "10.78",
                qualifiers: ["P"],
                dateTime: "2023-01-15T13:30:00.000-07:00",
              },
              {
                value: "10.78",
                qualifiers: ["P"],
                dateTime: "2023-01-15T13:45:00.000-07:00",
              },
              {
                value: "10.78",
                qualifiers: ["P"],
                dateTime: "2023-01-15T14:00:00.000-07:00",
              },
              {
                value: "10.78",
                qualifiers: ["P"],
                dateTime: "2023-01-15T14:15:00.000-07:00",
              },
              {
                value: "10.78",
                qualifiers: ["P"],
                dateTime: "2023-01-15T14:30:00.000-07:00",
              },
              {
                value: "10.78",
                qualifiers: ["P"],
                dateTime: "2023-01-15T14:45:00.000-07:00",
              },
              {
                value: "10.78",
                qualifiers: ["P"],
                dateTime: "2023-01-15T15:00:00.000-07:00",
              },
              {
                value: "10.78",
                qualifiers: ["P"],
                dateTime: "2023-01-15T15:15:00.000-07:00",
              },
              {
                value: "10.78",
                qualifiers: ["P"],
                dateTime: "2023-01-15T15:30:00.000-07:00",
              },
              {
                value: "10.78",
                qualifiers: ["P"],
                dateTime: "2023-01-15T15:45:00.000-07:00",
              },
              {
                value: "10.78",
                qualifiers: ["P"],
                dateTime: "2023-01-15T16:00:00.000-07:00",
              },
              {
                value: "10.79",
                qualifiers: ["P"],
                dateTime: "2023-01-15T16:15:00.000-07:00",
              },
              {
                value: "10.79",
                qualifiers: ["P"],
                dateTime: "2023-01-15T16:30:00.000-07:00",
              },
              {
                value: "10.80",
                qualifiers: ["P"],
                dateTime: "2023-01-15T16:45:00.000-07:00",
              },
              {
                value: "10.81",
                qualifiers: ["P"],
                dateTime: "2023-01-15T17:00:00.000-07:00",
              },
              {
                value: "10.81",
                qualifiers: ["P"],
                dateTime: "2023-01-15T17:15:00.000-07:00",
              },
              {
                value: "10.82",
                qualifiers: ["P"],
                dateTime: "2023-01-15T17:30:00.000-07:00",
              },
              {
                value: "10.82",
                qualifiers: ["P"],
                dateTime: "2023-01-15T17:45:00.000-07:00",
              },
              {
                value: "10.83",
                qualifiers: ["P"],
                dateTime: "2023-01-15T18:00:00.000-07:00",
              },
              {
                value: "10.84",
                qualifiers: ["P"],
                dateTime: "2023-01-15T18:15:00.000-07:00",
              },
              {
                value: "10.84",
                qualifiers: ["P"],
                dateTime: "2023-01-15T18:30:00.000-07:00",
              },
              {
                value: "10.84",
                qualifiers: ["P"],
                dateTime: "2023-01-15T18:45:00.000-07:00",
              },
              {
                value: "10.84",
                qualifiers: ["P"],
                dateTime: "2023-01-15T19:00:00.000-07:00",
              },
              {
                value: "10.85",
                qualifiers: ["P"],
                dateTime: "2023-01-15T19:15:00.000-07:00",
              },
              {
                value: "10.85",
                qualifiers: ["P"],
                dateTime: "2023-01-15T19:30:00.000-07:00",
              },
              {
                value: "10.85",
                qualifiers: ["P"],
                dateTime: "2023-01-15T19:45:00.000-07:00",
              },
              {
                value: "10.85",
                qualifiers: ["P"],
                dateTime: "2023-01-15T20:00:00.000-07:00",
              },
              {
                value: "10.85",
                qualifiers: ["P"],
                dateTime: "2023-01-15T20:15:00.000-07:00",
              },
              {
                value: "10.85",
                qualifiers: ["P"],
                dateTime: "2023-01-15T20:30:00.000-07:00",
              },
              {
                value: "10.85",
                qualifiers: ["P"],
                dateTime: "2023-01-15T20:45:00.000-07:00",
              },
              {
                value: "10.85",
                qualifiers: ["P"],
                dateTime: "2023-01-15T21:00:00.000-07:00",
              },
              {
                value: "10.85",
                qualifiers: ["P"],
                dateTime: "2023-01-15T21:15:00.000-07:00",
              },
              {
                value: "10.85",
                qualifiers: ["P"],
                dateTime: "2023-01-15T21:30:00.000-07:00",
              },
              {
                value: "10.85",
                qualifiers: ["P"],
                dateTime: "2023-01-15T21:45:00.000-07:00",
              },
              {
                value: "10.85",
                qualifiers: ["P"],
                dateTime: "2023-01-15T22:00:00.000-07:00",
              },
              {
                value: "10.85",
                qualifiers: ["P"],
                dateTime: "2023-01-15T22:15:00.000-07:00",
              },
              {
                value: "10.84",
                qualifiers: ["P"],
                dateTime: "2023-01-15T22:30:00.000-07:00",
              },
              {
                value: "10.84",
                qualifiers: ["P"],
                dateTime: "2023-01-15T22:45:00.000-07:00",
              },
              {
                value: "10.85",
                qualifiers: ["P"],
                dateTime: "2023-01-15T23:00:00.000-07:00",
              },
              {
                value: "10.84",
                qualifiers: ["P"],
                dateTime: "2023-01-15T23:15:00.000-07:00",
              },
              {
                value: "10.84",
                qualifiers: ["P"],
                dateTime: "2023-01-15T23:30:00.000-07:00",
              },
              {
                value: "10.84",
                qualifiers: ["P"],
                dateTime: "2023-01-15T23:45:00.000-07:00",
              },
              {
                value: "10.84",
                qualifiers: ["P"],
                dateTime: "2023-01-16T00:00:00.000-07:00",
              },
              {
                value: "10.84",
                qualifiers: ["P"],
                dateTime: "2023-01-16T00:15:00.000-07:00",
              },
              {
                value: "10.84",
                qualifiers: ["P"],
                dateTime: "2023-01-16T00:30:00.000-07:00",
              },
              {
                value: "10.84",
                qualifiers: ["P"],
                dateTime: "2023-01-16T00:45:00.000-07:00",
              },
              {
                value: "10.84",
                qualifiers: ["P"],
                dateTime: "2023-01-16T01:00:00.000-07:00",
              },
              {
                value: "10.84",
                qualifiers: ["P"],
                dateTime: "2023-01-16T01:15:00.000-07:00",
              },
              {
                value: "10.83",
                qualifiers: ["P"],
                dateTime: "2023-01-16T01:30:00.000-07:00",
              },
              {
                value: "10.83",
                qualifiers: ["P"],
                dateTime: "2023-01-16T01:45:00.000-07:00",
              },
              {
                value: "10.83",
                qualifiers: ["P"],
                dateTime: "2023-01-16T02:00:00.000-07:00",
              },
              {
                value: "10.83",
                qualifiers: ["P"],
                dateTime: "2023-01-16T02:15:00.000-07:00",
              },
              {
                value: "10.83",
                qualifiers: ["P"],
                dateTime: "2023-01-16T02:30:00.000-07:00",
              },
              {
                value: "10.83",
                qualifiers: ["P"],
                dateTime: "2023-01-16T02:45:00.000-07:00",
              },
              {
                value: "10.83",
                qualifiers: ["P"],
                dateTime: "2023-01-16T03:00:00.000-07:00",
              },
              {
                value: "10.83",
                qualifiers: ["P"],
                dateTime: "2023-01-16T03:15:00.000-07:00",
              },
              {
                value: "10.83",
                qualifiers: ["P"],
                dateTime: "2023-01-16T03:30:00.000-07:00",
              },
              {
                value: "10.84",
                qualifiers: ["P"],
                dateTime: "2023-01-16T03:45:00.000-07:00",
              },
              {
                value: "10.83",
                qualifiers: ["P"],
                dateTime: "2023-01-16T04:00:00.000-07:00",
              },
              {
                value: "10.83",
                qualifiers: ["P"],
                dateTime: "2023-01-16T04:15:00.000-07:00",
              },
              {
                value: "10.83",
                qualifiers: ["P"],
                dateTime: "2023-01-16T04:30:00.000-07:00",
              },
              {
                value: "10.83",
                qualifiers: ["P"],
                dateTime: "2023-01-16T04:45:00.000-07:00",
              },
              {
                value: "10.83",
                qualifiers: ["P"],
                dateTime: "2023-01-16T05:00:00.000-07:00",
              },
              {
                value: "10.83",
                qualifiers: ["P"],
                dateTime: "2023-01-16T05:15:00.000-07:00",
              },
              {
                value: "10.83",
                qualifiers: ["P"],
                dateTime: "2023-01-16T05:30:00.000-07:00",
              },
              {
                value: "10.83",
                qualifiers: ["P"],
                dateTime: "2023-01-16T05:45:00.000-07:00",
              },
              {
                value: "10.82",
                qualifiers: ["P"],
                dateTime: "2023-01-16T06:00:00.000-07:00",
              },
              {
                value: "10.82",
                qualifiers: ["P"],
                dateTime: "2023-01-16T06:15:00.000-07:00",
              },
              {
                value: "10.82",
                qualifiers: ["P"],
                dateTime: "2023-01-16T06:30:00.000-07:00",
              },
              {
                value: "10.81",
                qualifiers: ["P"],
                dateTime: "2023-01-16T06:45:00.000-07:00",
              },
              {
                value: "10.81",
                qualifiers: ["P"],
                dateTime: "2023-01-16T07:00:00.000-07:00",
              },
              {
                value: "10.80",
                qualifiers: ["P"],
                dateTime: "2023-01-16T07:15:00.000-07:00",
              },
              {
                value: "10.81",
                qualifiers: ["P"],
                dateTime: "2023-01-16T07:30:00.000-07:00",
              },
              {
                value: "10.81",
                qualifiers: ["P"],
                dateTime: "2023-01-16T07:45:00.000-07:00",
              },
              {
                value: "10.80",
                qualifiers: ["P"],
                dateTime: "2023-01-16T08:00:00.000-07:00",
              },
              {
                value: "10.80",
                qualifiers: ["P"],
                dateTime: "2023-01-16T08:15:00.000-07:00",
              },
              {
                value: "10.80",
                qualifiers: ["P"],
                dateTime: "2023-01-16T08:30:00.000-07:00",
              },
              {
                value: "10.79",
                qualifiers: ["P"],
                dateTime: "2023-01-16T08:45:00.000-07:00",
              },
              {
                value: "10.79",
                qualifiers: ["P"],
                dateTime: "2023-01-16T09:00:00.000-07:00",
              },
              {
                value: "10.79",
                qualifiers: ["P"],
                dateTime: "2023-01-16T09:15:00.000-07:00",
              },
              {
                value: "10.78",
                qualifiers: ["P"],
                dateTime: "2023-01-16T09:30:00.000-07:00",
              },
              {
                value: "10.78",
                qualifiers: ["P"],
                dateTime: "2023-01-16T09:45:00.000-07:00",
              },
              {
                value: "10.78",
                qualifiers: ["P"],
                dateTime: "2023-01-16T10:00:00.000-07:00",
              },
              {
                value: "10.78",
                qualifiers: ["P"],
                dateTime: "2023-01-16T10:15:00.000-07:00",
              },
              {
                value: "10.78",
                qualifiers: ["P"],
                dateTime: "2023-01-16T10:30:00.000-07:00",
              },
              {
                value: "10.78",
                qualifiers: ["P"],
                dateTime: "2023-01-16T10:45:00.000-07:00",
              },
              {
                value: "10.78",
                qualifiers: ["P"],
                dateTime: "2023-01-16T11:00:00.000-07:00",
              },
              {
                value: "10.78",
                qualifiers: ["P"],
                dateTime: "2023-01-16T11:15:00.000-07:00",
              },
              {
                value: "10.78",
                qualifiers: ["P"],
                dateTime: "2023-01-16T11:30:00.000-07:00",
              },
              {
                value: "10.78",
                qualifiers: ["P"],
                dateTime: "2023-01-16T11:45:00.000-07:00",
              },
              {
                value: "10.77",
                qualifiers: ["P"],
                dateTime: "2023-01-16T12:00:00.000-07:00",
              },
              {
                value: "10.78",
                qualifiers: ["P"],
                dateTime: "2023-01-16T12:15:00.000-07:00",
              },
              {
                value: "10.78",
                qualifiers: ["P"],
                dateTime: "2023-01-16T12:30:00.000-07:00",
              },
              {
                value: "10.78",
                qualifiers: ["P"],
                dateTime: "2023-01-16T12:45:00.000-07:00",
              },
              {
                value: "10.78",
                qualifiers: ["P"],
                dateTime: "2023-01-16T13:00:00.000-07:00",
              },
              {
                value: "10.78",
                qualifiers: ["P"],
                dateTime: "2023-01-16T13:15:00.000-07:00",
              },
              {
                value: "10.77",
                qualifiers: ["P"],
                dateTime: "2023-01-16T13:30:00.000-07:00",
              },
              {
                value: "10.77",
                qualifiers: ["P"],
                dateTime: "2023-01-16T13:45:00.000-07:00",
              },
              {
                value: "10.77",
                qualifiers: ["P"],
                dateTime: "2023-01-16T14:00:00.000-07:00",
              },
              {
                value: "10.77",
                qualifiers: ["P"],
                dateTime: "2023-01-16T14:15:00.000-07:00",
              },
              {
                value: "10.77",
                qualifiers: ["P"],
                dateTime: "2023-01-16T14:30:00.000-07:00",
              },
              {
                value: "10.77",
                qualifiers: ["P"],
                dateTime: "2023-01-16T14:45:00.000-07:00",
              },
              {
                value: "10.77",
                qualifiers: ["P"],
                dateTime: "2023-01-16T15:00:00.000-07:00",
              },
              {
                value: "10.78",
                qualifiers: ["P"],
                dateTime: "2023-01-16T15:15:00.000-07:00",
              },
              {
                value: "10.77",
                qualifiers: ["P"],
                dateTime: "2023-01-16T15:30:00.000-07:00",
              },
              {
                value: "10.78",
                qualifiers: ["P"],
                dateTime: "2023-01-16T15:45:00.000-07:00",
              },
              {
                value: "10.78",
                qualifiers: ["P"],
                dateTime: "2023-01-16T16:00:00.000-07:00",
              },
              {
                value: "10.79",
                qualifiers: ["P"],
                dateTime: "2023-01-16T16:15:00.000-07:00",
              },
              {
                value: "10.79",
                qualifiers: ["P"],
                dateTime: "2023-01-16T16:30:00.000-07:00",
              },
              {
                value: "10.80",
                qualifiers: ["P"],
                dateTime: "2023-01-16T16:45:00.000-07:00",
              },
              {
                value: "10.80",
                qualifiers: ["P"],
                dateTime: "2023-01-16T17:00:00.000-07:00",
              },
              {
                value: "10.81",
                qualifiers: ["P"],
                dateTime: "2023-01-16T17:15:00.000-07:00",
              },
              {
                value: "10.82",
                qualifiers: ["P"],
                dateTime: "2023-01-16T17:30:00.000-07:00",
              },
              {
                value: "10.82",
                qualifiers: ["P"],
                dateTime: "2023-01-16T17:45:00.000-07:00",
              },
              {
                value: "10.83",
                qualifiers: ["P"],
                dateTime: "2023-01-16T18:00:00.000-07:00",
              },
              {
                value: "10.83",
                qualifiers: ["P"],
                dateTime: "2023-01-16T18:15:00.000-07:00",
              },
              {
                value: "10.84",
                qualifiers: ["P"],
                dateTime: "2023-01-16T18:30:00.000-07:00",
              },
              {
                value: "10.83",
                qualifiers: ["P"],
                dateTime: "2023-01-16T18:45:00.000-07:00",
              },
              {
                value: "10.84",
                qualifiers: ["P"],
                dateTime: "2023-01-16T19:00:00.000-07:00",
              },
              {
                value: "10.84",
                qualifiers: ["P"],
                dateTime: "2023-01-16T19:15:00.000-07:00",
              },
              {
                value: "10.84",
                qualifiers: ["P"],
                dateTime: "2023-01-16T19:30:00.000-07:00",
              },
              {
                value: "10.84",
                qualifiers: ["P"],
                dateTime: "2023-01-16T19:45:00.000-07:00",
              },
              {
                value: "10.84",
                qualifiers: ["P"],
                dateTime: "2023-01-16T20:00:00.000-07:00",
              },
              {
                value: "10.84",
                qualifiers: ["P"],
                dateTime: "2023-01-16T20:15:00.000-07:00",
              },
              {
                value: "10.84",
                qualifiers: ["P"],
                dateTime: "2023-01-16T20:30:00.000-07:00",
              },
              {
                value: "10.84",
                qualifiers: ["P"],
                dateTime: "2023-01-16T20:45:00.000-07:00",
              },
              {
                value: "10.84",
                qualifiers: ["P"],
                dateTime: "2023-01-16T21:00:00.000-07:00",
              },
              {
                value: "10.84",
                qualifiers: ["P"],
                dateTime: "2023-01-16T21:15:00.000-07:00",
              },
              {
                value: "10.83",
                qualifiers: ["P"],
                dateTime: "2023-01-16T21:30:00.000-07:00",
              },
              {
                value: "10.83",
                qualifiers: ["P"],
                dateTime: "2023-01-16T21:45:00.000-07:00",
              },
              {
                value: "10.83",
                qualifiers: ["P"],
                dateTime: "2023-01-16T22:00:00.000-07:00",
              },
              {
                value: "10.83",
                qualifiers: ["P"],
                dateTime: "2023-01-16T22:15:00.000-07:00",
              },
              {
                value: "10.83",
                qualifiers: ["P"],
                dateTime: "2023-01-16T22:30:00.000-07:00",
              },
              {
                value: "10.83",
                qualifiers: ["P"],
                dateTime: "2023-01-16T22:45:00.000-07:00",
              },
              {
                value: "10.83",
                qualifiers: ["P"],
                dateTime: "2023-01-16T23:00:00.000-07:00",
              },
              {
                value: "10.82",
                qualifiers: ["P"],
                dateTime: "2023-01-16T23:15:00.000-07:00",
              },
              {
                value: "10.82",
                qualifiers: ["P"],
                dateTime: "2023-01-16T23:30:00.000-07:00",
              },
              {
                value: "10.82",
                qualifiers: ["P"],
                dateTime: "2023-01-16T23:45:00.000-07:00",
              },
              {
                value: "10.83",
                qualifiers: ["P"],
                dateTime: "2023-01-17T00:00:00.000-07:00",
              },
              {
                value: "10.83",
                qualifiers: ["P"],
                dateTime: "2023-01-17T00:15:00.000-07:00",
              },
              {
                value: "10.83",
                qualifiers: ["P"],
                dateTime: "2023-01-17T00:30:00.000-07:00",
              },
              {
                value: "10.83",
                qualifiers: ["P"],
                dateTime: "2023-01-17T00:45:00.000-07:00",
              },
              {
                value: "10.83",
                qualifiers: ["P"],
                dateTime: "2023-01-17T01:00:00.000-07:00",
              },
              {
                value: "10.83",
                qualifiers: ["P"],
                dateTime: "2023-01-17T01:15:00.000-07:00",
              },
              {
                value: "10.83",
                qualifiers: ["P"],
                dateTime: "2023-01-17T01:30:00.000-07:00",
              },
              {
                value: "10.83",
                qualifiers: ["P"],
                dateTime: "2023-01-17T01:45:00.000-07:00",
              },
              {
                value: "10.83",
                qualifiers: ["P"],
                dateTime: "2023-01-17T02:00:00.000-07:00",
              },
              {
                value: "10.83",
                qualifiers: ["P"],
                dateTime: "2023-01-17T02:15:00.000-07:00",
              },
              {
                value: "10.83",
                qualifiers: ["P"],
                dateTime: "2023-01-17T02:30:00.000-07:00",
              },
              {
                value: "10.83",
                qualifiers: ["P"],
                dateTime: "2023-01-17T02:45:00.000-07:00",
              },
              {
                value: "10.83",
                qualifiers: ["P"],
                dateTime: "2023-01-17T03:00:00.000-07:00",
              },
              {
                value: "10.83",
                qualifiers: ["P"],
                dateTime: "2023-01-17T03:15:00.000-07:00",
              },
              {
                value: "10.83",
                qualifiers: ["P"],
                dateTime: "2023-01-17T03:30:00.000-07:00",
              },
              {
                value: "10.83",
                qualifiers: ["P"],
                dateTime: "2023-01-17T03:45:00.000-07:00",
              },
              {
                value: "10.83",
                qualifiers: ["P"],
                dateTime: "2023-01-17T04:00:00.000-07:00",
              },
              {
                value: "10.83",
                qualifiers: ["P"],
                dateTime: "2023-01-17T04:15:00.000-07:00",
              },
              {
                value: "10.82",
                qualifiers: ["P"],
                dateTime: "2023-01-17T04:30:00.000-07:00",
              },
              {
                value: "10.83",
                qualifiers: ["P"],
                dateTime: "2023-01-17T04:45:00.000-07:00",
              },
              {
                value: "10.83",
                qualifiers: ["P"],
                dateTime: "2023-01-17T05:00:00.000-07:00",
              },
              {
                value: "10.83",
                qualifiers: ["P"],
                dateTime: "2023-01-17T05:15:00.000-07:00",
              },
              {
                value: "10.82",
                qualifiers: ["P"],
                dateTime: "2023-01-17T05:30:00.000-07:00",
              },
              {
                value: "10.82",
                qualifiers: ["P"],
                dateTime: "2023-01-17T05:45:00.000-07:00",
              },
              {
                value: "10.82",
                qualifiers: ["P"],
                dateTime: "2023-01-17T06:00:00.000-07:00",
              },
              {
                value: "10.81",
                qualifiers: ["P"],
                dateTime: "2023-01-17T06:15:00.000-07:00",
              },
              {
                value: "10.82",
                qualifiers: ["P"],
                dateTime: "2023-01-17T06:30:00.000-07:00",
              },
              {
                value: "10.81",
                qualifiers: ["P"],
                dateTime: "2023-01-17T06:45:00.000-07:00",
              },
              {
                value: "10.81",
                qualifiers: ["P"],
                dateTime: "2023-01-17T07:00:00.000-07:00",
              },
              {
                value: "10.81",
                qualifiers: ["P"],
                dateTime: "2023-01-17T07:15:00.000-07:00",
              },
              {
                value: "10.80",
                qualifiers: ["P"],
                dateTime: "2023-01-17T07:30:00.000-07:00",
              },
              {
                value: "10.80",
                qualifiers: ["P"],
                dateTime: "2023-01-17T07:45:00.000-07:00",
              },
              {
                value: "10.80",
                qualifiers: ["P"],
                dateTime: "2023-01-17T08:00:00.000-07:00",
              },
              {
                value: "10.80",
                qualifiers: ["P"],
                dateTime: "2023-01-17T08:15:00.000-07:00",
              },
              {
                value: "10.79",
                qualifiers: ["P"],
                dateTime: "2023-01-17T08:30:00.000-07:00",
              },
              {
                value: "10.80",
                qualifiers: ["P"],
                dateTime: "2023-01-17T08:45:00.000-07:00",
              },
              {
                value: "10.79",
                qualifiers: ["P"],
                dateTime: "2023-01-17T09:00:00.000-07:00",
              },
              {
                value: "10.79",
                qualifiers: ["P"],
                dateTime: "2023-01-17T09:15:00.000-07:00",
              },
              {
                value: "10.79",
                qualifiers: ["P"],
                dateTime: "2023-01-17T09:30:00.000-07:00",
              },
              {
                value: "10.78",
                qualifiers: ["P"],
                dateTime: "2023-01-17T09:45:00.000-07:00",
              },
              {
                value: "10.78",
                qualifiers: ["P"],
                dateTime: "2023-01-17T10:00:00.000-07:00",
              },
              {
                value: "10.78",
                qualifiers: ["P"],
                dateTime: "2023-01-17T10:15:00.000-07:00",
              },
              {
                value: "10.78",
                qualifiers: ["P"],
                dateTime: "2023-01-17T10:30:00.000-07:00",
              },
              {
                value: "10.78",
                qualifiers: ["P"],
                dateTime: "2023-01-17T10:45:00.000-07:00",
              },
              {
                value: "10.77",
                qualifiers: ["P"],
                dateTime: "2023-01-17T11:00:00.000-07:00",
              },
              {
                value: "10.77",
                qualifiers: ["P"],
                dateTime: "2023-01-17T11:15:00.000-07:00",
              },
              {
                value: "10.77",
                qualifiers: ["P"],
                dateTime: "2023-01-17T11:30:00.000-07:00",
              },
              {
                value: "10.77",
                qualifiers: ["P"],
                dateTime: "2023-01-17T11:45:00.000-07:00",
              },
              {
                value: "10.77",
                qualifiers: ["P"],
                dateTime: "2023-01-17T12:00:00.000-07:00",
              },
              {
                value: "10.77",
                qualifiers: ["P"],
                dateTime: "2023-01-17T12:15:00.000-07:00",
              },
              {
                value: "10.77",
                qualifiers: ["P"],
                dateTime: "2023-01-17T12:30:00.000-07:00",
              },
              {
                value: "10.77",
                qualifiers: ["P"],
                dateTime: "2023-01-17T12:45:00.000-07:00",
              },
              {
                value: "10.77",
                qualifiers: ["P"],
                dateTime: "2023-01-17T13:00:00.000-07:00",
              },
              {
                value: "10.77",
                qualifiers: ["P"],
                dateTime: "2023-01-17T13:15:00.000-07:00",
              },
              {
                value: "10.76",
                qualifiers: ["P"],
                dateTime: "2023-01-17T13:30:00.000-07:00",
              },
              {
                value: "10.76",
                qualifiers: ["P"],
                dateTime: "2023-01-17T13:45:00.000-07:00",
              },
              {
                value: "10.76",
                qualifiers: ["P"],
                dateTime: "2023-01-17T14:00:00.000-07:00",
              },
              {
                value: "10.76",
                qualifiers: ["P"],
                dateTime: "2023-01-17T14:15:00.000-07:00",
              },
              {
                value: "10.76",
                qualifiers: ["P"],
                dateTime: "2023-01-17T14:30:00.000-07:00",
              },
              {
                value: "10.76",
                qualifiers: ["P"],
                dateTime: "2023-01-17T14:45:00.000-07:00",
              },
              {
                value: "10.76",
                qualifiers: ["P"],
                dateTime: "2023-01-17T15:00:00.000-07:00",
              },
              {
                value: "10.77",
                qualifiers: ["P"],
                dateTime: "2023-01-17T15:15:00.000-07:00",
              },
              {
                value: "10.78",
                qualifiers: ["P"],
                dateTime: "2023-01-17T15:30:00.000-07:00",
              },
              {
                value: "10.78",
                qualifiers: ["P"],
                dateTime: "2023-01-17T15:45:00.000-07:00",
              },
              {
                value: "10.79",
                qualifiers: ["P"],
                dateTime: "2023-01-17T16:00:00.000-07:00",
              },
              {
                value: "10.79",
                qualifiers: ["P"],
                dateTime: "2023-01-17T16:15:00.000-07:00",
              },
              {
                value: "10.80",
                qualifiers: ["P"],
                dateTime: "2023-01-17T16:30:00.000-07:00",
              },
              {
                value: "10.80",
                qualifiers: ["P"],
                dateTime: "2023-01-17T16:45:00.000-07:00",
              },
            ],
            qualifier: [
              {
                qualifierCode: "P",
                qualifierDescription: "Provisional data subject to revision.",
                qualifierID: 0,
                network: "NWIS",
                vocabulary: "uv_rmk_cd",
              },
            ],
            qualityControlLevel: [],
            method: [
              {
                methodDescription: "",
                methodID: 280750,
              },
            ],
            source: [],
            offset: [],
            sample: [],
            censorCode: [],
          },
        ],
        name: "USGS:06710247:00065:00000",
      },
    ],
  },
  nil: false,
  globalScope: true,
  typeSubstituted: false,
};

export const topFlows: TopFlows[] = [
  {
    waveName: "Munich City Wave",
    cfs: 100,
    countryFlag: "🇩🇪",
    urlParam: "munich-city-wave",
  },
  {
    waveName: "Bend Whitewater Park",
    cfs: 150,
    countryFlag: "🇺🇸",
    urlParam: "bend-whitewater-park",
  },
  {
    waveName: "Habitat 67 Wave",
    cfs: 200,
    countryFlag: "🇨🇦",
    urlParam: "habitat-67-wave",
  },
  {
    waveName: "River Arno Wave",
    cfs: 120,
    countryFlag: "🇮🇹",
    urlParam: "river-arno-wave",
  },
  {
    waveName: "Sevilla Wave",
    cfs: 180,
    countryFlag: "🇪🇸",
    urlParam: "sevilla-wave",
  },
];

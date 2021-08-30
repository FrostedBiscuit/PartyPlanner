using System;

namespace PartyPlanner.Core.Constants
{
    public static class PartyPlannerConsts
    {
        private const string CONN_STRING_ENV_VAR = "ConnectionString";
        private const string DB_NAME_ENV_VAR = "DatabaseName";
        private const string COLLECTION_NAME_ENV_VAR = "CollectionName";

        private const string LOG_PATH_ENV_VAR = "LogFilePath";

        private const string CONN_STRING_DEFAULT = "mongodb://PartyPlanner.DB:27017/";
        private const string DB_NAME_DEFAULT = "PartyPlanner";
        private const string COLLECTION_NAME_DEFAULT = "Parties";

        private const string LOG_PATH_DEFAULT = "./logs/rest.log";

        public static string DBConnectionString { get; private set; }
        public static string PartyPlannerDatabaseName { get; private set; }
        public static string PartyCollectionName { get; private set; }

        public static string LogFilePath { get; private set; }

        public static void Init()
        {
            DBConnectionString = Environment.GetEnvironmentVariable(CONN_STRING_ENV_VAR) ?? CONN_STRING_DEFAULT;
            PartyPlannerDatabaseName = Environment.GetEnvironmentVariable(DB_NAME_ENV_VAR) ?? DB_NAME_DEFAULT;
            PartyCollectionName = Environment.GetEnvironmentVariable(COLLECTION_NAME_ENV_VAR) ?? COLLECTION_NAME_DEFAULT;

            LogFilePath = Environment.GetEnvironmentVariable(LOG_PATH_ENV_VAR) ?? LOG_PATH_DEFAULT;
        }
    }
}

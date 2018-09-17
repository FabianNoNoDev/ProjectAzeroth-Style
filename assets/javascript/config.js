var config = (function()
{
    var m_Private   = {};
    var m_Public    = {};

    m_Public.ajax = document.location.origin + "/";
    m_Public.modal_timer = 3000;
    m_Public.EntryTypes = Object.freeze ///< Object.freeze() allow to read but not to modify object
    ({
        "Category"                    : 0,
        "Spell"                       : 1,
        "Title"                       : 2,
        "Item"                        : 3,
        "Currency"                    : 4,
        "Rename"                      : 5,
        "GuildRename"                 : 6,
        "Gold"                        : 7,
        "Level"                       : 8,
        "Faction"                     : 9,
        "Race"                        : 10,
        "PremadeCharacter"            : 11,
        "RealmTransfer"               : 12,
        "ExpansionTransfer"           : 13,
        "Premium"                     : 14,
        "DeletedCharacter"            : 15,
        "ItemProfession"              : 16,
        "Transmogrification"          : 17,
        "PackItems"                   : 18,
        "CategoryProfession"          : 19,
        "CategoryPremade"             : 20,
        "ItemMount"                   : 21,
        "Customization"               : 22,
        "CategoryCharacterManagement" : 23,
        "CategoryRealmTransfer"       : 24,
        "CategoryExpansionTransfer"   : 25,
        "CategoryGold"                : 26
    });

    return m_Public;
})();
package com.amplifyframework.datastore.generated.model;

import com.amplifyframework.core.model.annotations.HasMany;
import com.amplifyframework.core.model.ModelList;
import com.amplifyframework.core.model.annotations.HasOne;
import com.amplifyframework.core.model.ModelReference;
import com.amplifyframework.core.model.LoadedModelReferenceImpl;
import com.amplifyframework.core.model.temporal.Temporal;
import com.amplifyframework.core.model.ModelIdentifier;

import java.util.List;
import java.util.UUID;
import java.util.Objects;

import androidx.core.util.ObjectsCompat;

import com.amplifyframework.core.model.AuthStrategy;
import com.amplifyframework.core.model.Model;
import com.amplifyframework.core.model.ModelOperation;
import com.amplifyframework.core.model.annotations.AuthRule;
import com.amplifyframework.core.model.annotations.Index;
import com.amplifyframework.core.model.annotations.ModelConfig;
import com.amplifyframework.core.model.annotations.ModelField;
import com.amplifyframework.core.model.query.predicate.QueryField;

import static com.amplifyframework.core.model.query.predicate.QueryField.field;

/** This is an auto generated class representing the UserProfile type in your schema. */
@SuppressWarnings("all")
@ModelConfig(pluralName = "UserProfiles", type = Model.Type.USER, version = 1, authRules = {
  @AuthRule(allow = AuthStrategy.OWNER, ownerField = "owner", identityClaim = "cognito:username", provider = "userPools", operations = { ModelOperation.READ })
}, hasLazySupport = true)
public final class UserProfile implements Model {
  public static final UserProfilePath rootPath = new UserProfilePath("root", false, null);
  public static final QueryField ID = field("UserProfile", "id");
  public static final QueryField EMAIL = field("UserProfile", "email");
  public static final QueryField ACCOUNT_OWNER = field("UserProfile", "accountOwner");
  public static final QueryField NAME = field("UserProfile", "name");
  public static final QueryField SURNAME = field("UserProfile", "surname");
  public static final QueryField GOV_ID = field("UserProfile", "govId");
  public static final QueryField ADDRESS = field("UserProfile", "address");
  public static final QueryField CONTACTS = field("UserProfile", "contacts");
  public static final QueryField INCOME_TYPE = field("UserProfile", "incomeType");
  public static final QueryField LOCAL_EXPENSE = field("UserProfile", "localExpense");
  public static final QueryField SIGN_DECLARATION = field("UserProfile", "signDeclaration");
  private final @ModelField(targetType="ID", isRequired = true) String id;
  private final @ModelField(targetType="String") String email;
  private final @ModelField(targetType="String") String accountOwner;
  private final @ModelField(targetType="String") String name;
  private final @ModelField(targetType="String") String surname;
  private final @ModelField(targetType="String") String govId;
  private final @ModelField(targetType="String") String address;
  private final @ModelField(targetType="String") String contacts;
  private final @ModelField(targetType="Int") Integer incomeType;
  private final @ModelField(targetType="String") String localExpense;
  private final @ModelField(targetType="Boolean") Boolean signDeclaration;
  private final @ModelField(targetType="CreditTransaction") @HasMany(associatedWith = "activeProfile", type = CreditTransaction.class) ModelList<CreditTransaction> creditTransaction = null;
  private final @ModelField(targetType="CreditAccountInfo") @HasOne(associatedWith = "userProfile", type = CreditAccountInfo.class) ModelReference<CreditAccountInfo> activeCreditAccountInfo = null;
  private @ModelField(targetType="AWSDateTime", isReadOnly = true) Temporal.DateTime createdAt;
  private @ModelField(targetType="AWSDateTime", isReadOnly = true) Temporal.DateTime updatedAt;
  /** @deprecated This API is internal to Amplify and should not be used. */
  @Deprecated
   public String resolveIdentifier() {
    return id;
  }
  
  public String getId() {
      return id;
  }
  
  public String getEmail() {
      return email;
  }
  
  public String getAccountOwner() {
      return accountOwner;
  }
  
  public String getName() {
      return name;
  }
  
  public String getSurname() {
      return surname;
  }
  
  public String getGovId() {
      return govId;
  }
  
  public String getAddress() {
      return address;
  }
  
  public String getContacts() {
      return contacts;
  }
  
  public Integer getIncomeType() {
      return incomeType;
  }
  
  public String getLocalExpense() {
      return localExpense;
  }
  
  public Boolean getSignDeclaration() {
      return signDeclaration;
  }
  
  public ModelList<CreditTransaction> getCreditTransaction() {
      return creditTransaction;
  }
  
  public ModelReference<CreditAccountInfo> getActiveCreditAccountInfo() {
      return activeCreditAccountInfo;
  }
  
  public Temporal.DateTime getCreatedAt() {
      return createdAt;
  }
  
  public Temporal.DateTime getUpdatedAt() {
      return updatedAt;
  }
  
  private UserProfile(String id, String email, String accountOwner, String name, String surname, String govId, String address, String contacts, Integer incomeType, String localExpense, Boolean signDeclaration) {
    this.id = id;
    this.email = email;
    this.accountOwner = accountOwner;
    this.name = name;
    this.surname = surname;
    this.govId = govId;
    this.address = address;
    this.contacts = contacts;
    this.incomeType = incomeType;
    this.localExpense = localExpense;
    this.signDeclaration = signDeclaration;
  }
  
  @Override
   public boolean equals(Object obj) {
      if (this == obj) {
        return true;
      } else if(obj == null || getClass() != obj.getClass()) {
        return false;
      } else {
      UserProfile userProfile = (UserProfile) obj;
      return ObjectsCompat.equals(getId(), userProfile.getId()) &&
              ObjectsCompat.equals(getEmail(), userProfile.getEmail()) &&
              ObjectsCompat.equals(getAccountOwner(), userProfile.getAccountOwner()) &&
              ObjectsCompat.equals(getName(), userProfile.getName()) &&
              ObjectsCompat.equals(getSurname(), userProfile.getSurname()) &&
              ObjectsCompat.equals(getGovId(), userProfile.getGovId()) &&
              ObjectsCompat.equals(getAddress(), userProfile.getAddress()) &&
              ObjectsCompat.equals(getContacts(), userProfile.getContacts()) &&
              ObjectsCompat.equals(getIncomeType(), userProfile.getIncomeType()) &&
              ObjectsCompat.equals(getLocalExpense(), userProfile.getLocalExpense()) &&
              ObjectsCompat.equals(getSignDeclaration(), userProfile.getSignDeclaration()) &&
              ObjectsCompat.equals(getCreatedAt(), userProfile.getCreatedAt()) &&
              ObjectsCompat.equals(getUpdatedAt(), userProfile.getUpdatedAt());
      }
  }
  
  @Override
   public int hashCode() {
    return new StringBuilder()
      .append(getId())
      .append(getEmail())
      .append(getAccountOwner())
      .append(getName())
      .append(getSurname())
      .append(getGovId())
      .append(getAddress())
      .append(getContacts())
      .append(getIncomeType())
      .append(getLocalExpense())
      .append(getSignDeclaration())
      .append(getCreatedAt())
      .append(getUpdatedAt())
      .toString()
      .hashCode();
  }
  
  @Override
   public String toString() {
    return new StringBuilder()
      .append("UserProfile {")
      .append("id=" + String.valueOf(getId()) + ", ")
      .append("email=" + String.valueOf(getEmail()) + ", ")
      .append("accountOwner=" + String.valueOf(getAccountOwner()) + ", ")
      .append("name=" + String.valueOf(getName()) + ", ")
      .append("surname=" + String.valueOf(getSurname()) + ", ")
      .append("govId=" + String.valueOf(getGovId()) + ", ")
      .append("address=" + String.valueOf(getAddress()) + ", ")
      .append("contacts=" + String.valueOf(getContacts()) + ", ")
      .append("incomeType=" + String.valueOf(getIncomeType()) + ", ")
      .append("localExpense=" + String.valueOf(getLocalExpense()) + ", ")
      .append("signDeclaration=" + String.valueOf(getSignDeclaration()) + ", ")
      .append("createdAt=" + String.valueOf(getCreatedAt()) + ", ")
      .append("updatedAt=" + String.valueOf(getUpdatedAt()))
      .append("}")
      .toString();
  }
  
  public static BuildStep builder() {
      return new Builder();
  }
  
  /**
   * WARNING: This method should not be used to build an instance of this object for a CREATE mutation.
   * This is a convenience method to return an instance of the object with only its ID populated
   * to be used in the context of a parameter in a delete mutation or referencing a foreign key
   * in a relationship.
   * @param id the id of the existing item this instance will represent
   * @return an instance of this model with only ID populated
   */
  public static UserProfile justId(String id) {
    return new UserProfile(
      id,
      null,
      null,
      null,
      null,
      null,
      null,
      null,
      null,
      null,
      null
    );
  }
  
  public CopyOfBuilder copyOfBuilder() {
    return new CopyOfBuilder(id,
      email,
      accountOwner,
      name,
      surname,
      govId,
      address,
      contacts,
      incomeType,
      localExpense,
      signDeclaration);
  }
  public interface BuildStep {
    UserProfile build();
    BuildStep id(String id);
    BuildStep email(String email);
    BuildStep accountOwner(String accountOwner);
    BuildStep name(String name);
    BuildStep surname(String surname);
    BuildStep govId(String govId);
    BuildStep address(String address);
    BuildStep contacts(String contacts);
    BuildStep incomeType(Integer incomeType);
    BuildStep localExpense(String localExpense);
    BuildStep signDeclaration(Boolean signDeclaration);
  }
  

  public static class Builder implements BuildStep {
    private String id;
    private String email;
    private String accountOwner;
    private String name;
    private String surname;
    private String govId;
    private String address;
    private String contacts;
    private Integer incomeType;
    private String localExpense;
    private Boolean signDeclaration;
    public Builder() {
      
    }
    
    private Builder(String id, String email, String accountOwner, String name, String surname, String govId, String address, String contacts, Integer incomeType, String localExpense, Boolean signDeclaration) {
      this.id = id;
      this.email = email;
      this.accountOwner = accountOwner;
      this.name = name;
      this.surname = surname;
      this.govId = govId;
      this.address = address;
      this.contacts = contacts;
      this.incomeType = incomeType;
      this.localExpense = localExpense;
      this.signDeclaration = signDeclaration;
    }
    
    @Override
     public UserProfile build() {
        String id = this.id != null ? this.id : UUID.randomUUID().toString();
        
        return new UserProfile(
          id,
          email,
          accountOwner,
          name,
          surname,
          govId,
          address,
          contacts,
          incomeType,
          localExpense,
          signDeclaration);
    }
    
    @Override
     public BuildStep email(String email) {
        this.email = email;
        return this;
    }
    
    @Override
     public BuildStep accountOwner(String accountOwner) {
        this.accountOwner = accountOwner;
        return this;
    }
    
    @Override
     public BuildStep name(String name) {
        this.name = name;
        return this;
    }
    
    @Override
     public BuildStep surname(String surname) {
        this.surname = surname;
        return this;
    }
    
    @Override
     public BuildStep govId(String govId) {
        this.govId = govId;
        return this;
    }
    
    @Override
     public BuildStep address(String address) {
        this.address = address;
        return this;
    }
    
    @Override
     public BuildStep contacts(String contacts) {
        this.contacts = contacts;
        return this;
    }
    
    @Override
     public BuildStep incomeType(Integer incomeType) {
        this.incomeType = incomeType;
        return this;
    }
    
    @Override
     public BuildStep localExpense(String localExpense) {
        this.localExpense = localExpense;
        return this;
    }
    
    @Override
     public BuildStep signDeclaration(Boolean signDeclaration) {
        this.signDeclaration = signDeclaration;
        return this;
    }
    
    /**
     * @param id id
     * @return Current Builder instance, for fluent method chaining
     */
    public BuildStep id(String id) {
        this.id = id;
        return this;
    }
  }
  

  public final class CopyOfBuilder extends Builder {
    private CopyOfBuilder(String id, String email, String accountOwner, String name, String surname, String govId, String address, String contacts, Integer incomeType, String localExpense, Boolean signDeclaration) {
      super(id, email, accountOwner, name, surname, govId, address, contacts, incomeType, localExpense, signDeclaration);
      
    }
    
    @Override
     public CopyOfBuilder email(String email) {
      return (CopyOfBuilder) super.email(email);
    }
    
    @Override
     public CopyOfBuilder accountOwner(String accountOwner) {
      return (CopyOfBuilder) super.accountOwner(accountOwner);
    }
    
    @Override
     public CopyOfBuilder name(String name) {
      return (CopyOfBuilder) super.name(name);
    }
    
    @Override
     public CopyOfBuilder surname(String surname) {
      return (CopyOfBuilder) super.surname(surname);
    }
    
    @Override
     public CopyOfBuilder govId(String govId) {
      return (CopyOfBuilder) super.govId(govId);
    }
    
    @Override
     public CopyOfBuilder address(String address) {
      return (CopyOfBuilder) super.address(address);
    }
    
    @Override
     public CopyOfBuilder contacts(String contacts) {
      return (CopyOfBuilder) super.contacts(contacts);
    }
    
    @Override
     public CopyOfBuilder incomeType(Integer incomeType) {
      return (CopyOfBuilder) super.incomeType(incomeType);
    }
    
    @Override
     public CopyOfBuilder localExpense(String localExpense) {
      return (CopyOfBuilder) super.localExpense(localExpense);
    }
    
    @Override
     public CopyOfBuilder signDeclaration(Boolean signDeclaration) {
      return (CopyOfBuilder) super.signDeclaration(signDeclaration);
    }
  }
  

  public static class UserProfileIdentifier extends ModelIdentifier<UserProfile> {
    private static final long serialVersionUID = 1L;
    public UserProfileIdentifier(String id) {
      super(id);
    }
  }
  
}

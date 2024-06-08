package com.amplifyframework.datastore.generated.model;

import com.amplifyframework.core.model.annotations.BelongsTo;
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

/** This is an auto generated class representing the CreditAccountInfo type in your schema. */
@SuppressWarnings("all")
@ModelConfig(pluralName = "CreditAccountInfos", type = Model.Type.USER, version = 1, authRules = {
  @AuthRule(allow = AuthStrategy.OWNER, ownerField = "profileOwner", identityClaim = "cognito:username", provider = "userPools", operations = { ModelOperation.CREATE, ModelOperation.UPDATE, ModelOperation.DELETE, ModelOperation.READ })
}, hasLazySupport = true)
public final class CreditAccountInfo implements Model {
  public static final CreditAccountInfoPath rootPath = new CreditAccountInfoPath("root", false, null);
  public static final QueryField ID = field("CreditAccountInfo", "id");
  public static final QueryField CREDIT_ACCOUNT = field("CreditAccountInfo", "creditAccount");
  public static final QueryField ACCOUNT_STATUS = field("CreditAccountInfo", "accountStatus");
  public static final QueryField AVAILABLE_CREDIT = field("CreditAccountInfo", "availableCredit");
  public static final QueryField BALANCE_OWING = field("CreditAccountInfo", "balanceOwing");
  public static final QueryField CREDIT_LIMIT = field("CreditAccountInfo", "creditLimit");
  public static final QueryField MINIMUM_DUE = field("CreditAccountInfo", "minimumDue");
  public static final QueryField DUE_DATE = field("CreditAccountInfo", "dueDate");
  public static final QueryField MONTHS_PAID = field("CreditAccountInfo", "monthsPaid");
  public static final QueryField MONTHS_DEFAULT = field("CreditAccountInfo", "monthsDefault");
  public static final QueryField USER_PROFILES = field("CreditAccountInfo", "profileId");
  private final @ModelField(targetType="ID", isRequired = true) String id;
  private final @ModelField(targetType="String") String creditAccount;
  private final @ModelField(targetType="String") String accountStatus;
  private final @ModelField(targetType="Int") Integer availableCredit;
  private final @ModelField(targetType="Int") Integer balanceOwing;
  private final @ModelField(targetType="Int") Integer creditLimit;
  private final @ModelField(targetType="Int") Integer minimumDue;
  private final @ModelField(targetType="String") String dueDate;
  private final @ModelField(targetType="String") String monthsPaid;
  private final @ModelField(targetType="String") String monthsDefault;
  private final @ModelField(targetType="UserProfile") @BelongsTo(targetName = "profileId", targetNames = {"profileId"}, type = UserProfile.class) ModelReference<UserProfile> userProfiles;
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
  
  public String getCreditAccount() {
      return creditAccount;
  }
  
  public String getAccountStatus() {
      return accountStatus;
  }
  
  public Integer getAvailableCredit() {
      return availableCredit;
  }
  
  public Integer getBalanceOwing() {
      return balanceOwing;
  }
  
  public Integer getCreditLimit() {
      return creditLimit;
  }
  
  public Integer getMinimumDue() {
      return minimumDue;
  }
  
  public String getDueDate() {
      return dueDate;
  }
  
  public String getMonthsPaid() {
      return monthsPaid;
  }
  
  public String getMonthsDefault() {
      return monthsDefault;
  }
  
  public ModelReference<UserProfile> getUserProfiles() {
      return userProfiles;
  }
  
  public Temporal.DateTime getCreatedAt() {
      return createdAt;
  }
  
  public Temporal.DateTime getUpdatedAt() {
      return updatedAt;
  }
  
  private CreditAccountInfo(String id, String creditAccount, String accountStatus, Integer availableCredit, Integer balanceOwing, Integer creditLimit, Integer minimumDue, String dueDate, String monthsPaid, String monthsDefault, ModelReference<UserProfile> userProfiles) {
    this.id = id;
    this.creditAccount = creditAccount;
    this.accountStatus = accountStatus;
    this.availableCredit = availableCredit;
    this.balanceOwing = balanceOwing;
    this.creditLimit = creditLimit;
    this.minimumDue = minimumDue;
    this.dueDate = dueDate;
    this.monthsPaid = monthsPaid;
    this.monthsDefault = monthsDefault;
    this.userProfiles = userProfiles;
  }
  
  @Override
   public boolean equals(Object obj) {
      if (this == obj) {
        return true;
      } else if(obj == null || getClass() != obj.getClass()) {
        return false;
      } else {
      CreditAccountInfo creditAccountInfo = (CreditAccountInfo) obj;
      return ObjectsCompat.equals(getId(), creditAccountInfo.getId()) &&
              ObjectsCompat.equals(getCreditAccount(), creditAccountInfo.getCreditAccount()) &&
              ObjectsCompat.equals(getAccountStatus(), creditAccountInfo.getAccountStatus()) &&
              ObjectsCompat.equals(getAvailableCredit(), creditAccountInfo.getAvailableCredit()) &&
              ObjectsCompat.equals(getBalanceOwing(), creditAccountInfo.getBalanceOwing()) &&
              ObjectsCompat.equals(getCreditLimit(), creditAccountInfo.getCreditLimit()) &&
              ObjectsCompat.equals(getMinimumDue(), creditAccountInfo.getMinimumDue()) &&
              ObjectsCompat.equals(getDueDate(), creditAccountInfo.getDueDate()) &&
              ObjectsCompat.equals(getMonthsPaid(), creditAccountInfo.getMonthsPaid()) &&
              ObjectsCompat.equals(getMonthsDefault(), creditAccountInfo.getMonthsDefault()) &&
              ObjectsCompat.equals(getUserProfiles(), creditAccountInfo.getUserProfiles()) &&
              ObjectsCompat.equals(getCreatedAt(), creditAccountInfo.getCreatedAt()) &&
              ObjectsCompat.equals(getUpdatedAt(), creditAccountInfo.getUpdatedAt());
      }
  }
  
  @Override
   public int hashCode() {
    return new StringBuilder()
      .append(getId())
      .append(getCreditAccount())
      .append(getAccountStatus())
      .append(getAvailableCredit())
      .append(getBalanceOwing())
      .append(getCreditLimit())
      .append(getMinimumDue())
      .append(getDueDate())
      .append(getMonthsPaid())
      .append(getMonthsDefault())
      .append(getUserProfiles())
      .append(getCreatedAt())
      .append(getUpdatedAt())
      .toString()
      .hashCode();
  }
  
  @Override
   public String toString() {
    return new StringBuilder()
      .append("CreditAccountInfo {")
      .append("id=" + String.valueOf(getId()) + ", ")
      .append("creditAccount=" + String.valueOf(getCreditAccount()) + ", ")
      .append("accountStatus=" + String.valueOf(getAccountStatus()) + ", ")
      .append("availableCredit=" + String.valueOf(getAvailableCredit()) + ", ")
      .append("balanceOwing=" + String.valueOf(getBalanceOwing()) + ", ")
      .append("creditLimit=" + String.valueOf(getCreditLimit()) + ", ")
      .append("minimumDue=" + String.valueOf(getMinimumDue()) + ", ")
      .append("dueDate=" + String.valueOf(getDueDate()) + ", ")
      .append("monthsPaid=" + String.valueOf(getMonthsPaid()) + ", ")
      .append("monthsDefault=" + String.valueOf(getMonthsDefault()) + ", ")
      .append("userProfiles=" + String.valueOf(getUserProfiles()) + ", ")
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
  public static CreditAccountInfo justId(String id) {
    return new CreditAccountInfo(
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
      creditAccount,
      accountStatus,
      availableCredit,
      balanceOwing,
      creditLimit,
      minimumDue,
      dueDate,
      monthsPaid,
      monthsDefault,
      userProfiles);
  }
  public interface BuildStep {
    CreditAccountInfo build();
    BuildStep id(String id);
    BuildStep creditAccount(String creditAccount);
    BuildStep accountStatus(String accountStatus);
    BuildStep availableCredit(Integer availableCredit);
    BuildStep balanceOwing(Integer balanceOwing);
    BuildStep creditLimit(Integer creditLimit);
    BuildStep minimumDue(Integer minimumDue);
    BuildStep dueDate(String dueDate);
    BuildStep monthsPaid(String monthsPaid);
    BuildStep monthsDefault(String monthsDefault);
    BuildStep userProfiles(UserProfile userProfiles);
  }
  

  public static class Builder implements BuildStep {
    private String id;
    private String creditAccount;
    private String accountStatus;
    private Integer availableCredit;
    private Integer balanceOwing;
    private Integer creditLimit;
    private Integer minimumDue;
    private String dueDate;
    private String monthsPaid;
    private String monthsDefault;
    private ModelReference<UserProfile> userProfiles;
    public Builder() {
      
    }
    
    private Builder(String id, String creditAccount, String accountStatus, Integer availableCredit, Integer balanceOwing, Integer creditLimit, Integer minimumDue, String dueDate, String monthsPaid, String monthsDefault, ModelReference<UserProfile> userProfiles) {
      this.id = id;
      this.creditAccount = creditAccount;
      this.accountStatus = accountStatus;
      this.availableCredit = availableCredit;
      this.balanceOwing = balanceOwing;
      this.creditLimit = creditLimit;
      this.minimumDue = minimumDue;
      this.dueDate = dueDate;
      this.monthsPaid = monthsPaid;
      this.monthsDefault = monthsDefault;
      this.userProfiles = userProfiles;
    }
    
    @Override
     public CreditAccountInfo build() {
        String id = this.id != null ? this.id : UUID.randomUUID().toString();
        
        return new CreditAccountInfo(
          id,
          creditAccount,
          accountStatus,
          availableCredit,
          balanceOwing,
          creditLimit,
          minimumDue,
          dueDate,
          monthsPaid,
          monthsDefault,
          userProfiles);
    }
    
    @Override
     public BuildStep creditAccount(String creditAccount) {
        this.creditAccount = creditAccount;
        return this;
    }
    
    @Override
     public BuildStep accountStatus(String accountStatus) {
        this.accountStatus = accountStatus;
        return this;
    }
    
    @Override
     public BuildStep availableCredit(Integer availableCredit) {
        this.availableCredit = availableCredit;
        return this;
    }
    
    @Override
     public BuildStep balanceOwing(Integer balanceOwing) {
        this.balanceOwing = balanceOwing;
        return this;
    }
    
    @Override
     public BuildStep creditLimit(Integer creditLimit) {
        this.creditLimit = creditLimit;
        return this;
    }
    
    @Override
     public BuildStep minimumDue(Integer minimumDue) {
        this.minimumDue = minimumDue;
        return this;
    }
    
    @Override
     public BuildStep dueDate(String dueDate) {
        this.dueDate = dueDate;
        return this;
    }
    
    @Override
     public BuildStep monthsPaid(String monthsPaid) {
        this.monthsPaid = monthsPaid;
        return this;
    }
    
    @Override
     public BuildStep monthsDefault(String monthsDefault) {
        this.monthsDefault = monthsDefault;
        return this;
    }
    
    @Override
     public BuildStep userProfiles(UserProfile userProfiles) {
        this.userProfiles = new LoadedModelReferenceImpl<>(userProfiles);
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
    private CopyOfBuilder(String id, String creditAccount, String accountStatus, Integer availableCredit, Integer balanceOwing, Integer creditLimit, Integer minimumDue, String dueDate, String monthsPaid, String monthsDefault, ModelReference<UserProfile> userProfiles) {
      super(id, creditAccount, accountStatus, availableCredit, balanceOwing, creditLimit, minimumDue, dueDate, monthsPaid, monthsDefault, userProfiles);
      
    }
    
    @Override
     public CopyOfBuilder creditAccount(String creditAccount) {
      return (CopyOfBuilder) super.creditAccount(creditAccount);
    }
    
    @Override
     public CopyOfBuilder accountStatus(String accountStatus) {
      return (CopyOfBuilder) super.accountStatus(accountStatus);
    }
    
    @Override
     public CopyOfBuilder availableCredit(Integer availableCredit) {
      return (CopyOfBuilder) super.availableCredit(availableCredit);
    }
    
    @Override
     public CopyOfBuilder balanceOwing(Integer balanceOwing) {
      return (CopyOfBuilder) super.balanceOwing(balanceOwing);
    }
    
    @Override
     public CopyOfBuilder creditLimit(Integer creditLimit) {
      return (CopyOfBuilder) super.creditLimit(creditLimit);
    }
    
    @Override
     public CopyOfBuilder minimumDue(Integer minimumDue) {
      return (CopyOfBuilder) super.minimumDue(minimumDue);
    }
    
    @Override
     public CopyOfBuilder dueDate(String dueDate) {
      return (CopyOfBuilder) super.dueDate(dueDate);
    }
    
    @Override
     public CopyOfBuilder monthsPaid(String monthsPaid) {
      return (CopyOfBuilder) super.monthsPaid(monthsPaid);
    }
    
    @Override
     public CopyOfBuilder monthsDefault(String monthsDefault) {
      return (CopyOfBuilder) super.monthsDefault(monthsDefault);
    }
    
    @Override
     public CopyOfBuilder userProfiles(UserProfile userProfiles) {
      return (CopyOfBuilder) super.userProfiles(userProfiles);
    }
  }
  

  public static class CreditAccountInfoIdentifier extends ModelIdentifier<CreditAccountInfo> {
    private static final long serialVersionUID = 1L;
    public CreditAccountInfoIdentifier(String id) {
      super(id);
    }
  }
  
}
